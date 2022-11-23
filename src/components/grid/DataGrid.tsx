import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'; 
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-material.css';

const DataGrid = ({columns ,rows }:{columns:[], rows:[]}) => {

    console.log("rendering again >> ", columns );
    const [columnDefs, setColumns ] = useState(columns || []);
    const [rowData, setRowData] = useState(rows || []);

    useEffect(()=>{
        setRowData(rows);
        setColumns(columns);
    }, [rows, columns])
    
    return (
        <div className="ag-theme-material" style={{ height: "90%", width: "100%" }}>
            <AgGridReact modules={[ClientSideRowModelModule]} 
                rowData={rowData}>
                {columnDefs.map(column => (<AgGridColumn {...column} key={column.field} />))}
            </AgGridReact> 
        </div>
    );
};


// DataGrid.propTypes = {
//     rows:PropTypes.array.isRequired
// }

export default DataGrid;
