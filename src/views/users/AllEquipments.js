// import React, { useState, useEffect } from 'react';
// import {AgGridColumn, AgGridReact} from 'ag-grid-react';
// import 'ag-grid-enterprise'
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import _ from 'lodash'
// import {Grid,TextField,makeStyles,Button} from '@material-ui/core';
// import axios from "axios";
// import Input from 'src/controls/Input';
// import {GridApi,GridOptions } from 'ag-grid-community';
// import {CButton,CCard,CCardBody,CCardHeader,CCol,CForm,CFormInput,CFormLabel,CFormTextarea,
//     CRow, } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilEnvelopeLetter} from '@coreui/icons'
// import Controls from "../../controls/Controls";
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
// import PageviewIcon from '@material-ui/icons/Pageview';
// import {useHistory, useParams, Link,} from 'react-router-dom'
// import FormDialog from 'src/components/dialog';
// import AddUser from './AddUser';
// import Card from '@material-ui/core/Card';

// const useStyles = makeStyles(theme => ({
//   pageContent: {
//       margin: theme.spacing(55),
//       padding: theme.spacing(53)
//   },
//   newbutton:{
//     position: "absolute",
//     right :'25px'
//   }, 
//   containerLg: {
//     marginTop: "18px", //if marginLeft or marginRight is changed, grid container won't center
//     marginBottom: "28px"
//   }
// }))
// const AllEquipments = () => {
//   const [openPopup, setOpenPopup] = useState(false);  
//   let history = useHistory(); 
//   const classes =useStyles();
//   const REACT_APP_rooturl = process.env;  
//   const [gridApi ,setGridApi]  = useState(null);
//   const [searchText, setSearchText] = useState('')
//   const [gridColumnApi ,setGridColumnApi] =  useState(null);
//   const [gridColumnsToFitApi ,setGridColumnsToFitApi] =  useState(null);  
//   const perPage = 3;
//     // useEffect(() => {
//     //    axios.get(process.env.REACT_APP_rooturl + '/equipments')
//     //  .then (rowData =>{setRowData(rowData.data.reverse())});         
//     //   }, []);
//       const defaultColDef = {        
//         resizable: true,  
//         sortable: true
//         //editable: true,        
//        // filter: 'agTextColumnFilter',
//     };      
//     const columns=[
//         {headerName:"ID",field:'equipmentID',width: 70},
//         {headerName: 'EquipID',field: "equipmentCode",width: 100, sortable: true},
//         {headerName: 'EquipName',field: "equipmentName",width: 100, sortable: true},     
//         {headerName: 'Specification',field:"specifications",width: 400},
//         {headerName: 'Department',field:"departmentName",width: 120,sortable: true},
//         {headerName: 'DOP',field:"dateOfPurchase",width: 110,cellRenderer: (data) => {
//          return data ? (new Date(data.value)).toLocaleDateString() : ''; }},
//         {headerName: 'Cost',field:"costOfEquipment",width: 100},       
//         {headerName: 'Status',field:"equipmentStatus",width: 80},        
//         {headerName: 'Actions',field:"ID",cellRendererFramework:(params)=>
//         <div>          
//         <Button  size = "small" color="primary" onClick={() => handleFormSubmit(params.data)}>        
//         <EditIcon fontSize="small" />      
//         </Button>        
//         <Button  size = "small" color="primary" onClick={()=>console.log(params.value)}>
//          <PageviewIcon fontSize="small"/>
//         </Button>
//         {/* <Button variant ="outlined" size = "small" color="secondary" onClick={()=>deleteUser(params.value)}>Delete </Button> */}
//         </div>
//          } 
//        ]
//     const searchDivStyle= {
//        // backgroundColor:"#c7d7c7",
//         padding:5 
//     }
//     const searchStyle={
//         width:"25%",padding:"5px 10px",borderRadius: "15px"   
//     }
//     useEffect(() => {
//         // console.log(searchText)
//         if (gridApi) {
//           onGridReady(gridApi)
//         }
//       }, [searchText])
     
//   const search = _.debounce((text) => {
//     // console.log(text)
//     setSearchText(text)
//   }, 1000)
 
//     const datasource = {        
//     getRows(params) {
//       //console.log(JSON.stringify(params.request, null, 1));      
//       const {startRow, endRow, filterModel, sortModel } = params.request
//       let url= process.env.REACT_APP_rooturl       
//       //Quick filter
//       if (searchText) {
//        // url1 += `q=${searchText}&`
//        //`http://localhost:3000/api/equipmentsSearch/${searchText}`
//          url += `/equipmentsSearch/${searchText}`       
//       }
//       else
//       {
//         url += `/Equipment`       
//       }
     
//       //Sorting
//     //   if (sortModel.length) {
//     //     const { colId, sort } = sortModel[0]
//     //     url += `_sort=${colId}&_order=${sort}&`
//     //   }
//       //Filtering
//     //   const filterKeys = Object.keys(filterModel)
//     //   filterKeys.forEach(filter => {
//     //     url += `${filter}=${filterModel[filter].filter}&`
//     //   })
//       //Pagination
//     //   url += `_start=${startRow}&_end=${endRow}`      
          
           
//     axios.get(url)
//     .then(response => {
//     // console.log(response.data)
//      params.successCallback(response.data.hospitalLookup, 499);             
//     })
//         .catch(err=>{
//             console.log(err);
//         })  
//            }

//   };
//   const getSelectedRowData = () => {    
//     alert("`Selected Nodes:\n${JSON.stringify(selectedData)}`");    
//   };

//     const onGridReady=(params)=>{             
//         setGridApi(params);
       
//        // register datasource with the grid
//        params.api.setServerSideDatasource(datasource);

//         //api call
//         // axios.get(process.env.REACT_APP_rooturl + '/equipments')        
//         // .then(resp=>{params.api.applyTransaction({add:resp})});        
//     }

//     // const onFilterTextChange=(e)=>{
//     //  console.log(e.target.value)  
//     // // gridOptions.api.setQuickFilter(e.target.value)
//     //   gridApi.setQuickFilter(e.target.value)
//     // }
//   //   const AddUser = () => {      
//   //     history.push("/equipments/add-new-equipments") 
//   //     //setValues(initialFValues);
//   //     //setErrors({})
//   // }
//   const deleteUser= async (id) =>{
//     await axios.delete(process.env.REACT_APP_rooturl + `/deleteEquip/${id}`)
//     .then (responce => {
//      if(responce.data !=null)
//          {            //notify();
//           alert ("Equipment is Deleted Successfully !")
//          }
//        })
    
//    .catch(error=>{
//      console.log(error)
  
//    })
//   }
//   const handleFormSubmit = () => {
//     let url= process.env.REACT_APP_rooturl 
//     if (FormDialog.id) {
//       //updating a user 
//       const confirm = window.confirm("Are you sure, you want to update this row ?")
//       confirm && fetch(url + `/${FormDialog.id}`, {
//         method: "PUT", body: JSON.stringify(FormDialog), headers: {
//           'content-type': "application/json"
//         }
//       }).then(resp => resp.json())
//         .then(resp => {
//          // handleClose()
//          // getUsers()

//         })
//     } else {
//       // adding new user
//       fetch(url, {
//         method: "POST", body: JSON.stringify(FormDialog), headers: {
//           'content-type': "application/json"
//         }
//       }).then(resp => resp.json())
//         .then(resp => {
//           //handleClose()
//           //getUsers()
//         })
//     }
//   }
//    return (
//      <>
//        <div className='App'> 
//         <Controls.Button
//          text="Add Equipment"
//          variant="outlined"
//          startIcon= {<AddIcon />}
//          onClick= {()=> setOpenPopup(true)} 
//           className= {classes.newbutton}
//           />                       
//        <div style={searchDivStyle}>
//        {/* <CFormInput style={searchStyle} type= "search" onChange={onFilterTextChange} placeholder="Search somthing......"/> */}
//        <CFormInput style={searchStyle} type= "search" placeholder="Search something......" onChange={e => search(e.target.value)}/>
//        </div>                    
//        <div className="ag-theme-alpine" style={{height:400}}>           
//            <AgGridReact
//             //defaultColDef={defaultColDef}
//           //defaultColDef={{ filter: true, floatingFilter: true, sortable: true }}
//          // defaultColDef={{ filter: true }}          
//             columnDefs={columns}           
//              pagination= {true} 
//              paginationPageSize={10}
//              cacheBlockSize={perPage}
//              sortable = {true}
//              flex= {1}
//              filter= {true}
//            // domLayout="autoHeight"
//            // rowModelType="serverSide"
//             onGridReady={onGridReady}  
//             //rowSelection= 'single'
//             onRowDoubleClicked={()=> setOpenPopup(true)}   
//             />           
//        </div>
//        <FormDialog
//        title= "Add Equipment"
//        openPopup = {openPopup}
//        setOpenPopup={setOpenPopup}
//        >
//         <AddUser />
//       </FormDialog >      
//        </div> 

//        </> 
//    );
// };

// export default AllEquipments ;
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
import EditIcon from '@material-ui/icons/Edit';
import PageviewIcon from '@material-ui/icons/Pageview';
import {useHistory, useParams, Link,} from 'react-router-dom'
import FormDialog from 'src/components/dialog';
import AddUser from '../users/AddUser';
//import AddEditHospName from './AddEditHospName';


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
const initialValue = { equipmentID: "", equipmentName: "", specifications: "", dateOfPurchase: "" }

const AllEquipments  = () => {
  const [open, setOpen] = useState(false);  
  let history = useHistory(); 
  const classes =useStyles();
    const REACT_APP_rooturl = process.env;       
    const [gridApi ,setGridApi]  = useState(null);
    const [searchText, setSearchText] = useState('')
    const [gridColumnApi ,setGridColumnApi] =  useState(null);
    const [formData, setFormData] = useState(initialValue) 
    const [gridColumnsToFitApi ,setGridColumnsToFitApi] =  useState(null);   
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
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      setFormData(initialValue)
    };
    const columns=[
              {headerName:"ID",field:'equipmentID',width: 70},
              {headerName: 'EquipID',field: "equipmentCode",width: 100, sortable: true},
              {headerName: 'EquipName',field: "equipmentName",width: 100, sortable: true},     
              {headerName: 'Specification',field:"specifications",width: 400},
              {headerName: 'Department',field:"departmentName",width: 120,sortable: true},
              {headerName: 'DOP',field:"dateOfPurchase",width: 110,cellRenderer: (data) => {
               return data ? (new Date(data.value)).toLocaleDateString() : ''; }},
              {headerName: 'Cost',field:"costOfEquipment",width: 100},       
              {headerName: 'Status',field:"equipmentStatus",width: 80},       
              {headerName: 'Actions',field:"ID",cellRendererFramework:(params)=>
              <div>          
              <Button  size = "small" color="primary" onClick={() => handleUpdate(params.data)}>        
              <EditIcon fontSize="small" />      
              </Button>        
              <Button  size = "small" color="primary" onClick={()=>console.log(params.data)}>
               <PageviewIcon fontSize="small"/>
              </Button>
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
      let url= process.env.REACT_APP_rooturl         
      //Quick filter
      if (searchText) {      
         url += `/equipmentsSearch/${searchText}`       
      }
      else
      {
        url += `/Equipment`      
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
      .then(response => {console.log(response.data)
        params.successCallback(response.data, 499);})
          .catch(err=>{console.log(err);})  
        }
  };
  const getSelectedRowData = () => {    
    alert("`Selected Nodes:\n${JSON.stringify(selectedData)}`");    
  };
    const onGridReady=(params)=>{             
        setGridApi(params);     
       params.api.setServerSideDatasource(datasource);            
    }
    const onFilterTextChange=(e)=>{
     console.log(e.target.value)  
    // gridOptions.api.setQuickFilter(e.target.value)
      gridApi.setQuickFilter(e.target.value)
    } 

    // setting update row data to form data and opening pop up window
  const handleUpdate = (id) => {
    let url= process.env.REACT_APP_rooturl
    console.log(id.equipmentID)
       axios.get(url+`/EquipmentDetailByID?id=${id.equipmentID}`)
      .then(response => {console.log(response.data)
        setFormData(response.data)
        handleClickOpen()
      })
        .catch(err=>{console.log(err); 
        })
       
      } 
 
    
  
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
  const handleFormSubmit = () => {
        let url= process.env.REACT_APP_rooturl 
        if (FormDialog.id) {
          //updating a user 
          const confirm = window.confirm("Are you sure, you want to update this row ?")
          confirm && fetch(url + `/${FormDialog.id}`, {
            method: "PUT", body: JSON.stringify(FormDialog), headers: {
              'content-type': "application/json"
            }
          }).then(resp => resp.json())
            .then(resp => {
             // handleClose()
             // getUsers()
    
            })
        } else {
          // adding new user
          fetch(url, {
            method: "POST", body: JSON.stringify(FormDialog), headers: {
              'content-type': "application/json"
            }
          }).then(resp => resp.json())
            .then(resp => {
              //handleClose()
              //getUsers()
            })
        }
      }
   return (
     <>
       <div className='App'> 
        <Controls.Button
         text="Add Hospital"
         variant="outlined"
         startIcon= {<AddIcon />}
         onClick= {()=> setOpen(true)} 
         className= {classes.newbutton}
          />                       
       <div style={searchDivStyle}>
       <CFormInput style={searchStyle} type= "search" onChange={onFilterTextChange} placeholder="Search somthing......"/>
       {/* <CFormInput style={searchStyle} type= "search" placeholder="Search something......" onChange={e => search(e.target.value)}/> */}
       </div>                
                      
       <div className="ag-theme-alpine" style={{height:400}}>           
           <AgGridReact           
           columnDefs={columns}           
           pagination= {true} 
           paginationPageSize={10}
           cacheBlockSize={perPage}           
           rowModelType="serverSide"
           onGridReady={onGridReady}  
           //rowSelection= 'single'
           //onRowDoubleClicked={()=> setOpenPopup(true)}   
            />           
       </div>
       <FormDialog
       title= "Add Hospital"
       openPopup = {open}
       setOpenPopup={setOpen}
       data={formData}
       >    
       <AddUser />
      </FormDialog > 

       </div> 

       </> 
   );
};

export default AllEquipments ;