import styles from "./companies.module.css";
import { useContext, useEffect, useState } from "react";
import companiesData, {columnDefs} from "../assets/companies";
import DataGrid from "../components/grid/DataGrid";
import DataContext from "../contexts/dataContext";

const Companies = () => {
    const tempColums = columnDefs.map((column)=>({field:column}));
    const [columns, setColumns] = useState(tempColums);
    const rowData = useContext(DataContext);

    useEffect(() => {
        setColumns ((prevState)=>tempColums);
    }, []);

    return (
        <div className={styles.companies}>
            <DataGrid columns={columns} rows={rowData}/>
        </div>
    );
}   

export default Companies;
