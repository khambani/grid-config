import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import DataGrid from "./components/grid/DataGrid";
import Companies from "./pages/Companies";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
//import DataContext from "./contexts/dataContext";
import companiesData, { columnDefs } from "./assets/companies";
import DataContext from "./contexts/dataContext";
const ROWCOUNT = 10000;

function dataBuilder() {
  let dataArray: any[] = [];
  let pages = Math.floor(ROWCOUNT / companiesData.length);
  for (let i = 0; i < pages; i++) dataArray = dataArray.concat(companiesData);

  return dataArray;
}

function App() {
  const [gridData] = useState(dataBuilder());
  return (
    <div className={styles.container}>
      <DataContext.Provider value={gridData}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography varient="h3">
              Sample with Data Size : {gridData.length}{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="companies"
            element={<Companies />}
          />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
