import { AppBar, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const Header = ()=> {
    const [opened, setOpened]= useContext<boolean>(AppContext);
    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography varient="h3" onClick={()=>setOpened(!opened)}>
              AG Grid - REST Explorer
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default Header;