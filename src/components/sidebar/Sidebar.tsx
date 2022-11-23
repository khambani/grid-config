import { Close } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const list = () => {
    const [opened, setOpened]= useContext(AppContext);
    return (<div>This is sidebar <CloseIcon onClick={()=>setOpened(false)}></CloseIcon></div>);
}
const Sidebar = () => {
    const [opened, setOpened]= useContext(AppContext);
    return (
        <React.Fragment>
            <Drawer anchor="right" open={opened} onClose={()=>setOpened(false)}>
            {list()}
            </Drawer>
        </React.Fragment>
    );
}

export default Sidebar;
