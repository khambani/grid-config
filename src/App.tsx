import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import AppContext, {useAppContext} from "./contexts/AppContext";
import CloseIcon from '@mui/icons-material/Close';
import Dashboard from "./pages/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [opened, setOpened] = useState(false);
  const queryClient = new QueryClient()
  return (
    <div className={styles.container}>
      <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={[opened, setOpened]}>
          <Header />
          <Sidebar />
          <Routes>
            <Route
              index 
              element={<Dashboard />}
            />
          </Routes>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
