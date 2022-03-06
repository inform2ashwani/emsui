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


const Consumption = () => {

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
        headerName:"ID",
        field:'ID',
        width: 100
        },
        {
        headerName: 'DOC_NO',
        field: "DOC_NO",
        width: 120
        },
        {
        headerName: 'DOC_DT',
        field :"DOC_DT",
        width: 120,
        cellRenderer: (data) => {
          return data ? (new Date(data.value)).toLocaleDateString() : '';
        } 
        },
        {
        headerName: 'DRUG_SRNO',
        field:"DRUG_SRNO",
        width: 100
        
        },
        {
        headerName: 'DRUG_NM',
        field:"DRUG_NM",
        width: 120
        },
        {
        headerName: 'QTY',
        field:"QTY",
        width: 80,
        
        },
        {    
          headerName: 'TAX_RT',
          field:"TAX_RT",
          width: 100
          },
        {    
        headerName: 'TAX_AMT',
        field:"TAX_AMT",
        width: 100
        },
        {
        headerName: 'B_E_CD',
        field:"B_E_CD",
        width: 100
        },
        {         
        headerName: 'eqid',
        field:"eqid",
        width: 80
        },
        {
        headerName: 'SUPP',
        field:"SUPP",
        width: 100
        },
        {
          headerName: 'SUPP_NAME',
          field:"SUPP_NAME",
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
        fetch(process.env.REACT_APP_rooturl + '/consumption').then(resp=>resp.json())
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
       <div className="ag-theme-alpine" style={{height:400, width:1050}}>           
           <AgGridReact
            defaultColDef={defaultColDef}
           // rowData={rowData}
            onRowSelected={(e) => console.log("row selected", e.rowIndex)}
            onRowClicked={(e) => console.log("row clicked", e.rowIndex)}
            rowSelection="multiple"
            columnDefs={columns}  
            onGridReady={onGridReady}
            pagination= "true"   
            />            
           
       </div>
       </div>
  
   );
};

export default Consumption ;