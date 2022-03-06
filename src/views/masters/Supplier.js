import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import _ from 'lodash'
import {Grid,TextField,makeStyles,Button} from '@material-ui/core';
import axios from "axios";
import Input from 'src/controls/Input';
import {GridApi,GridOptions } from 'ag-grid-community';
import {CButton,CCard,CCardBody,CCardHeader,CCol,CForm,CFormInput,CFormLabel,CFormTextarea,
    CRow, } from '@coreui/react'
import Controls from "../../controls/Controls";
import AddIcon from '@material-ui/icons/Add';
import {useHistory, useParams, Link,} from 'react-router-dom'
import FormDialog from 'src/components/dialog';
import AddUser from '../users/AddUser';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(55),
      padding: theme.spacing(53)
  },
  newbutton:{
    position: "absolute",
    right :'25px'
  }, 
  containerLg: {
    marginTop: "18px", //if marginLeft or marginRight is changed, grid container won't center
    marginBottom: "28px"
  }
}))


const Supplier  = () => {
  const [openPopup, setOpenPopup] = useState(false);  
  let history = useHistory(); 
  const classes =useStyles();
    const REACT_APP_rooturl = process.env;       
    const [gridApi ,setGridApi]  = useState(null);
    const [searchText, setSearchText] = useState('')
    const [gridColumnApi ,setGridColumnApi] =  useState(null);
    const [gridColumnsToFitApi ,setGridColumnsToFitApi] =  useState(null);
    const [rowData, setRowData] = useState([]); 
    const perPage = 3;
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
      {headerName:"ID",field:'supplierID',width: 70},      
      {headerName: 'supplier Name',field :"supplierName",width: 150, sortable: true},  
      {headerName: 'Address',field: "address",width: 100, sortable: true},
      {headerName: 'phone',field: "phone",width: 100, sortable: true},
      {headerName: 'Mobile',field: "mobile",width: 100, sortable: true},
      {headerName: 'Fax',field: "fax",width: 100, sortable: true},     
      {headerName: 'EmailID',field: "emailID",width: 100, sortable: true},     
      {headerName: 'Website',field: "website",width: 100, sortable: true}, 
      {headerName: 'Website',field: "website",width: 100, sortable: true},              
      {headerName: 'Remarks',field:"remarks",width: 110,cellRenderer: (data) => {
       return data ? (new Date(data.value)).toLocaleDateString() : ''; }},
       {headerName: 'UpdatedDate',field:"UpdatedDate",width: 110,cellRenderer: (data) => {
        return data ? (new Date(data.value)).toLocaleDateString() : ''; }},
      {headerName: 'Created By',field:"CreatedBy",width: 100},
      {headerName: 'Updated By',field:"UpdatedBy",width: 100},
      {headerName: 'Status',field:"isActive",width: 80},
      {headerName: 'Actions',field:"ID",cellRendererFramework:(params)=>           
      <div>          
      <Button variant ="outlined" size = "small" color="primary">Edit</Button>
      <Button variant ="outlined" size = "small" color="secondary" onClick={()=>console.log(params.value)}>View </Button>
      {/* <Button variant ="outlined" size = "small" color="secondary" onClick={()=>deleteUser(params.value)}>Delete </Button> */}
      </div>
       } 
       ]
    const searchDivStyle= {
       // backgroundColor:"#c7d7c7",
        padding:5 
    }
    const searchStyle={
        width:"25%",padding:"5px 10px",borderRadius: "15px"   
    }
    useEffect(() => {
        // console.log(searchText)
        if (gridApi) {
          onGridReady(gridApi)
        }
      }, [searchText])
     
  const search = _.debounce((text) => {
    // console.log(text)
    setSearchText(text)
  }, 1000)

  const datasource = {
    getRows(params) {
      console.log(JSON.stringify(params.request, null, 1));      
      const {startRow, endRow, filterModel, sortModel } = params.request
      //let url = `http://localhost:3000/api/equipments/`

      let url= process.env.REACT_APP_rooturl 
      //let url=`http://localhost:3000/api/equipments`     
      //Quick filter
      if (searchText) {
       // url1 += `q=${searchText}&`
       //`http://localhost:3000/api/equipmentsSearch/${searchText}`
         url += `/equipmentsSearch/${searchText}`       
      }
      else
      {
        url += `/MasterLookup`      
      }
      //Sorting
    //   if (sortModel.length) {
    //     const { colId, sort } = sortModel[0]
    //     url += `_sort=${colId}&_order=${sort}&`
    //   }
      //Filtering
    //   const filterKeys = Object.keys(filterModel)
    //   filterKeys.forEach(filter => {
    //     url += `${filter}=${filterModel[filter].filter}&`
    //   })
      //Pagination
    //   url += `_start=${startRow}&_end=${endRow}`
   
    axios.get(url)
    .then(response => {
     console.log(response.data.supplierLookup)
     params.successCallback(response.data.supplierLookup, 499);             
    })
        .catch(err=>{
            console.log(err);
        })
    }
  };
  const getSelectedRowData = () => {
    
    alert("`Selected Nodes:\n${JSON.stringify(selectedData)}`");
    
  };


    const onGridReady=(params)=>{             
        setGridApi(params);
       
       // register datasource with the grid
       params.api.setServerSideDatasource(datasource);

        //api call
        // axios.get(process.env.REACT_APP_rooturl + '/equipments')        
        // .then(resp=>{params.api.applyTransaction({add:resp})});        
    }

    // const onFilterTextChange=(e)=>{
    //  console.log(e.target.value)  
    // // gridOptions.api.setQuickFilter(e.target.value)
    //   gridApi.setQuickFilter(e.target.value)
    // }
  //   const AddUser = () => {      
  //     history.push("/equipments/add-new-equipments") 
  //     //setValues(initialFValues);
  //     //setErrors({})
  // }
  const deleteUser= async (id) =>{
    await axios.delete(process.env.REACT_APP_rooturl + `/deleteEquip/${id}`)
    .then (responce => {
     if(responce.data !=null)
         {            //notify();
          alert ("Equipment is Deleted Successfully !")
         }
       })
    
   .catch(error=>{
     console.log(error)
  
   })
  }
   return (
     <>
       <div className='App'> 
        <Controls.Button
         text="Add Supplier"
         variant="outlined"
         startIcon= {<AddIcon />}
         onClick= {()=> setOpenPopup(true)} 
          className= {classes.newbutton}
          />                       
       <div style={searchDivStyle}>
       {/* <CFormInput style={searchStyle} type= "search" onChange={onFilterTextChange} placeholder="Search somthing......"/> */}
       <CFormInput style={searchStyle} type= "search" placeholder="Search something......" onChange={e => search(e.target.value)}/>
      
        </div>
                    
                      
       <div className="ag-theme-alpine" style={{height:400, width:1050}}>           
           <AgGridReact
            //defaultColDef={defaultColDef}
          //defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
         // defaultColDef={{ filter: true }}
            rowData={rowData}
            columnDefs={columns}           
             pagination= {true} 
             paginationPageSize={10}
             cacheBlockSize={perPage}
           // domLayout="autoHeight"
            rowModelType="serverSide"
            onGridReady={onGridReady}  
            rowSelection= 'single'
            onRowDoubleClicked={()=> setOpenPopup(true)}   
            />           
       </div>
       <FormDialog
       title= "Add Equipment"
       openPopup = {openPopup}
       setOpenPopup={setOpenPopup}
       >
        <AddUser />
      </FormDialog >      
       </div> 

       </> 
   );
};

export default Supplier ;