import { Button, Checkbox, FormControl, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material"
import DataGrid from "../components/grid/DataGrid";
import ReactJson from 'react-json-view'
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../contexts/AppContext";
import SettingVO from "../interface/Settings.types";

const fetchFakeData= async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const Dashboard = ()=> {
    const [settings, setSettings] = useContext<SettingVO>(AppContext);
    const [json, setJson] = useState();
    const [rows, setRows ] = useState([]);
    const [columns, setColumns ] = useState([]);
    const [url, setUrl] = useState('https://my-json-server.typicode.com/typicode/demo/posts')
    const [queryUrl, setQueryUrl] = useState(null);
    const [toggleJsonView, setToggleJsonView] = useState(true);
    const inputRef = useRef();
    
    useEffect(()=>{
        console.log("Dashboard >", settings);
        //console.log(inputField.current.value);
        if(queryUrl) {
            fetchFakeData(queryUrl).then(response=>{
                console.log("fetchFakeData > ", response);

                if(!Array.isArray(response)) {
                    const entries = Object.entries(response);
                    const arrayFound = entries.find((item)=> {
                        if(Array.isArray(item[1])) 
                            return item;
                    })
                    response = arrayFound[1];
                }

                if(response && response.length > 0) {
                    const fields:string[] = Object.keys(response[0]);
                    const newColumns  = fields.map((field:string, index:number)=>{
                        return {"field":field, "colId":index};
                    })
                    setColumns ([...newColumns]);
                    setJson(response.slice(0,5));
                    setRows (response);

                    setSettings({...settings, columns:[...newColumns]})
                }
            });
        }
    }, [queryUrl])

    const loadUrl = ()=> {
        setQueryUrl(url); 
    }

    const onInputChange = (e:React.ChangeEvent) => {
        setUrl(e.target.value);
    }

    return (
        
        <div style={{height:"100%"}}>
            <FormControl fullWidth sx={{ m: 1, flexDirection:"row", gap:2, paddingRight:10}} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">API Url:</InputLabel>
                <Input ref={inputRef} sx={{width:'99%'}}
                    startAdornment={<InputAdornment position="start" ></InputAdornment>} onChange={onInputChange}>{url}</Input>
                <Button variant="contained" size="small" sx={{minWidth:100, right:10, height:30}} onClick={loadUrl}>Load Grid</Button>
            </FormControl>
            
            <Checkbox checked={toggleJsonView} onChange={()=>setToggleJsonView(!toggleJsonView)}>Toggle JSON View</Checkbox>
            {toggleJsonView ? <ReactJson src={json} /> : <DataGrid rows={rows} columns={columns}></DataGrid> }
            
        </div>
    )
}

export default Dashboard;