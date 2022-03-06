import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from "axios";
import Input from 'src/controls/Input';
import {GridApi,GridOptions } from 'ag-grid-community';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CForm,CFormInput,CFormLabel,CFormTextarea,
    CRow, } from '@coreui/react'


const Repairs = () => {

    const REACT_APP_rooturl = process.env;
   
    const [gridApi ,setGridApi]  = useState(null);
    const [gridColumnApi ,setGridColumnApi] =  useState(null);
    const [gridColumnsToFitApi ,setGridColumnsToFitApi] =  useState(null);
    const [rowData, setRowData] = useState([]); 
    // useEffect(() => {
    //    axios.get(process.env.REACT_APP_rooturl + '/equipments')
    //  .then (rowData =>{setRowData(rowData.data.reverse())});         
    //   }, []);
      const defaultColDef = {        
        resizable: true,  
        sortable: true
        //editable: true,        
       // filter: 'agTextColumnFilter',
    };
    const columns=[        
        {
        headerName: 'RID',
        field: "rid",
        width: 120
        },
        {
          headerName: 'Eq_ID',
          field:"eQ_ID",        
          width: 100
          
          },
        {
        headerName: 'Rdate',
        field :"rdate",
        width: 120,
        cellRenderer: (data) => {
         return data ? (new Date(data.value)).toLocaleDateString() : '';
        } 
        },
       
        {
        headerName: 'Equipment_Name',
        field:"Equipment_Name",
        width: 120
        },
        {
        headerName: 'Specification',
        field:"specifications",
        width: 80,
        
        },
        {    
          headerName: 'Dept',
          field:"Dept",
          width: 100
          },
        
           
       
        {
        headerName: 'Action_taken',
        field:"Action_taken",
        width: 100
        },
      
        {
        headerName: 'Sapres',
        field:"used",
        width: 100
        },
        {
          headerName: 'Status',
          field:"status",
          width: 100
          }

    ]
    const searchDivStyle= {
       // backgroundColor:"#c7d7c7",
        padding:5 
    }
    const searchStyle={
        width:"25%",padding:"5px 10px",borderRadius: "15px"
    }
    const onGridReady=(params)=>{        
        fetch(process.env.REACT_APP_rooturl + '/RepairManagement').then(resp=>resp.json())
        .then(resp=>{params.api.applyTransaction({add:resp})});
        setGridApi(params.api);
       setGridColumnApi(params.ColumnApi);
    

        //api call
        // axios.get(process.env.REACT_APP_rooturl + '/equipments')        
        // .then(resp=>{params.api.applyTransaction({add:resp})});        
    }

    const onFilterTextChange=(e)=>{
     console.log(e.target.value)  
    // gridOptions.api.setQuickFilter(e.target.value)
      gridApi.setQuickFilter(e.target.value)
    }

   return (
       <div className='App'> 
       <div style={searchDivStyle}>
       <CFormInput style={searchStyle} type= "search" onChange={onFilterTextChange} placeholder="Search somthing......"/>
        </div>
       <div className="ag-theme-alpine" style={{height:400}}>           
           <AgGridReact
            defaultColDef={defaultColDef}
           // rowData={rowData}
            // onRowSelected={(e) => console.log("row selected", e.rowIndex)}
            // onRowClicked={(e) => console.log("row clicked", e.rowIndex)}
            // rowSelection="multiple"
            columnDefs={columns}  
            onGridReady={onGridReady}
            pagination= "true"   
            />            
           
       </div>
       </div>
  
   );
};

export default Repairs ;