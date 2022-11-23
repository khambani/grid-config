import { createContext } from "react";
const AppContext = createContext();
export default AppContext;
const useAppContext = ()=> {
    return {
        opened:true
    }
}

export {
    useAppContext
}