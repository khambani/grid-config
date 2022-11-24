import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import AppContext, {useAppContext} from "./contexts/AppContext";
import Dashboard from "./pages/Dashboard";
import SettingVO from "./interface/Settings.types";

function App() {
  const defaultSettings:SettingVO = {columns:[], opened:false};

  const [settings, setSettings] = useState<SettingVO>(defaultSettings);
  return (
    <div className={styles.container}>
        <AppContext.Provider value={[settings, setSettings]}>
          <Header />
          <Sidebar/>
          <Routes>
            <Route
              index 
              element={<Dashboard />}
            />
          </Routes>
        </AppContext.Provider>
    </div>
  );
}

export default App;
