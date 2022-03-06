import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import _ from 'lodash'
import { Grid, Button } from '@material-ui/core'
import FormDialog from '../users/AddEditEquipment';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PageviewIcon from '@material-ui/icons/Pageview';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios"
import AddEditDepartment from './AddEditDepartment';
import AddEditHospName from './AddEditHospName';


const initialValue = {  
  name: ""
}
  function HospitalName() {
    const [gridApi, setGridApi] = useState(null)
    const [tableData, setTableData] = useState(null)
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState(initialValue)
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setFormData(initialValue)
    };
    const url= process.env.REACT_APP_rooturl
    
    const columnDefs = [
      {headerName:"ID",field:'id',width: 70},     
      {headerName: 'Hosp Name',field :"name",width: 150, sortable: true},     
      {headerName: 'Actions',field:"id",cellRendererFramework:(params)=>
    <div>          
    <Button  size = "small" color="primary" onClick={() => handleUpdate(params.data)}>         
    <EditIcon fontSize="small" /></Button>    
    <Button  size = "small" color="secondary" onClick={()=>handleDelete(params.value)}>
    <CloseIcon fontSize="small"/> </Button>
       
    </div>
     } 
       ]
    useEffect(() => {
    getUsers()
      }, [])
    
   //fetching user data from server
   const getUsers = async () => {
    await axios.get(url+`/SubMaster?masterid=3`) 
    .then(resp =>{
    // console.log(resp)
      setTableData(resp.data) 
    });
    
    // fetch(url + `/Equipment`).then(resp => resp.json()).then(resp => setTableData(resp))
    }
   // console.log(resp.data)

    const onChange = (e) => {
      const { value, id } = e.target
       console.log(value,id)
      setFormData({ ...formData, [id]: value })
    }
    const onGridReady = (params) => {
      setGridApi(params)
    }

    // setting update row data to form data and opening pop up window
  const handleUpdate = (oldData) => {        
    setFormData(oldData)   
    handleClickOpen()
  }
  //deleting a user
  const handleDelete = (id) => {   
    const confirm = window.confirm("Are you sure, you want to delete this row", )
    if (confirm) {
      //http://ashwaniems1-001-site1.ctempurl.com/api/SubMaster?MasterID=5&SubMasterID=3
      axios.delete(url+`/SubMaster?masterid=3&SubMasterID=${id}`)
      .then(resp => getUsers())

     
    }
  }
  const handleFormSubmit = (id) => {    
    console.log(formData)
    console.log(url+`/SubMaster?masterid=3&SubMasterID`)
      // adding new user      
      fetch(url+`/SubMaster?masterid=3`, {
        method: "POST", body: JSON.stringify(formData),
        headers: {
          'content-type': "application/json"                
        }        
      }).then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          handleClose()
          getUsers()
        })
    }    
  
  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  
   return (    
       <div className='App'> 
       <Grid align="right">       
        <Button  variant="contained"  color="primary" onClick={handleClickOpen}>
        {<AddIcon />}
          </Button>
      </Grid>
      <div className="ag-theme-alpine" style={{ height: '400px' }}>
        <AgGridReact
          rowData={tableData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
      <AddEditHospName open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>      
   );
}

export default HospitalName ;