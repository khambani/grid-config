import CloseIcon from "@mui/icons-material/Close";
import { Drawer, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/AppContext";
import SettingVO from "../../interface/Settings.types";
import styles from './sidebar.module.css';

const list = () => {
    const [settings, setSettings]= useContext<SettingVO>(AppContext);
    
    useEffect(()=>{
        console.log("list >", settings);
    })

    return (
        <div className={styles.columnContainer}> 
            <Typography varient="h3">Columns Settings</Typography>
            <CloseIcon onClick={()=>setSettings({...settings, opened:false})}></CloseIcon>
            {settings.columns ? settings.columns.map(column=><div key={column.field}>{column.field}</div>) : null}
        </div>
    );
}
const Sidebar = () => {
    const [settings, setSettings]= useContext<SettingVO>(AppContext);
    const [columns, setColumns] = useState<any[]>(settings.columns);

    useEffect(()=>{
        console.log("Sidebar >", columns);
    })

    return (
        <React.Fragment>
            <Drawer anchor="right" open={settings.opened} onClose={()=>setSettings({...settings, opened:false})}>
                {list()}
            </Drawer>
        </React.Fragment>
    );
}

export default Sidebar;
