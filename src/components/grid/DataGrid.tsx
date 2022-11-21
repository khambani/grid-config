import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom'; 
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

const DataGrid = ({columns ,rows }:{columns:[], rows:[]}) => {
    const [columnDefs, setColumns ] = useState(columns || []);
    const [rowData, setRowData] = useState(rows || []);
    const [height, setHeight] = useState(400);
    
    return (
    <div className="ag-theme-alpine" style={{ height: "90%", width: 600 }}>
    { columnDefs ? <AgGridReact modules={[ClientSideRowModelModule]} rowData={rowData} columnDefs={columnDefs}></AgGridReact> : null }
    </div>
    );
};


DataGrid.propTypes = {
    columns :PropTypes.array.isRequired,
    rows:PropTypes.array.isRequired
}

export default DataGrid;
