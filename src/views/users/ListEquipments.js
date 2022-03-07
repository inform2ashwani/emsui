import React, { useState, useEffect } from 'react';
//import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Grid, Button } from '@material-ui/core'
import FormDialog from '../users/AddEditEquipment';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PageviewIcon from '@material-ui/icons/Pageview';
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios"
//const initialValue = { name: "", email: "", phone: "", dob: "" }
const initialValue = {  
  equipmentID: "",equipmentCode: "",equipNameID: "",categoryID: "",subCategoryID: "",  
  maintPeriodicityID: "", unitLookupID: "",specifications: "",departmentID: "", 
  costOfEquipment: "",dateOfInstallation: "",
  billDate: "",costOfEquipment: "",
  supplierID: "",statusID: "",remarks: "",isActive: true, 
  updatedDate: "",  
  dateOfInstallation: "", billDeatils: "",  
  //MODEL: "",  
  //BILL_DATE: "",  
}


function ListEquipments() {
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
  //const url = `http://localhost:4000/users`
  const columnDefs = [
    {headerName:"equipmentID",field:'equipmentID',width: 70},
    {headerName: 'EquipID',field: "equipmentCode",width: 100, sortable: true},
    {headerName: 'EquipName',field: "equipmentName",width: 100, sortable: true},     
    {headerName: 'Specification',field:"specifications",width: 400},
    {headerName: 'Department',field:"departmentName",width: 120,sortable: true},
    {headerName: 'DOP',field:"dateOfPurchase",width: 110,cellRenderer: (data) => {
     return data ? (new Date(data.value)).toLocaleDateString() : ''; }},
    //{headerName: 'Cost',field:"costOfEquipment",width: 100},       
   // {headerName: 'Status',field:"equipmentStatus",width: 80},       
    {headerName: 'Actions',field:"equipmentID",cellRendererFramework:(params)=>
    <div>          
    <Button  size = "small" color="primary" onClick={() => handleUpdate(params.data)}>        
    <EditIcon fontSize="small" />      
    </Button>  
    {/* <Button  size = "small" color="primary" onClick={()=>console.log(params.data)}>
     <PageviewIcon fontSize="small"/>
    </Button>      */}
    <Button  size = "small" color="secondary" onClick={()=>handleDelete(params.value)}>
       <CloseIcon fontSize="small"/> </Button>
      
    </div>
     } 
     
  ]
 
  // calling getUsers function for first time 
  useEffect(() => {
    getUsers()
  }, [])
  
  //fetching user data from server
  const getUsers = async () => {
    await axios.get(url + `/Equipment`) 
    .then(resp => setTableData(resp.data) 
    // fetch(url + `/Equipment`).then(resp => resp.json()).then(resp => setTableData(resp))
    )}

   

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
  const handleDelete = (equipmentID) => {
    console.log(equipmentID)
    const confirm = window.confirm("Are you sure, you want to delete this row", equipmentID)
    if (confirm) {
      axios.delete(url + `/Equipment?MasterID=${equipmentID}&IsActive=false&IsPermanentDelete=false`)
      .then(resp => getUsers())
     
    }
  }
  const handleFormSubmit = () => {
    if (formData.id) {
      //updating a user 
      const confirm = window.confirm("Are you sure, you want to update this row ?")
      confirm && fetch(`http://emsadmin-001-site1.htempurl.com/api/Equipment?${formData.id}`, {       
        method: "PUT", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"      
        }

      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()

        })
    } else {
      // adding new user
      fetch('http://emsadmin-001-site1.htempurl.com/api/Equipment', {
        method: "POST", body: JSON.stringify(formData), headers: {
          'content-type': "application/json"
        }
      }).then(resp => resp.json())
        .then(resp => {
          handleClose()
          getUsers()
        })
    }
  }

  const defaultColDef = {
    sortable: true,
    flex: 1, filter: true,
    floatingFilter: true
  }
  return (
    <div className="App">      
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
      <FormDialog open={open} handleClose={handleClose}
        data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default ListEquipments;