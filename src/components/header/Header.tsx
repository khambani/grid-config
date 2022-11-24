import { AppBar, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const Header = ()=> {
    const [settings, setSettings]= useContext<boolean>(AppContext);
    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography varient="h3" onClick={()=>setSettings({...settings, opened:true})}>
              AG Grid - REST Explorer
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Header;