import React, { useState } from 'react';
import { render } from 'react-dom'; 
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

const DataGrid = () => {
    const [rowData] = useState([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ]);
    
      const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
      ]);
    
      return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
          <AgGridReact modules={[ClientSideRowModelModule]} rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      );
};
export default DataGrid;
