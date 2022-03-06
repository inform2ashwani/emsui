import React from "react";
import {useEffect, useState} from 'react';
import MUIDataTable from "mui-datatables";
import {createTheme, formatMs,MuiThemeProvider}from '@material-ui/core/styles';
import axios from "axios";
import Controls from "../../controls/Controls";
import FormControl from '@material-ui/core/FormControl';
import { Select, MenuItem } from "@material-ui/core";
//import InputLabel from '@mui/material/InputLabel';
//import  useForm  from './useForm';
//import { useForm, Form } from '../useForm';
import {useHistory, useParams, Link,} from 'react-router-dom'
import { AlternateEmailRounded } from '@material-ui/icons';
//import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {Grid,TextField,makeStyles} from '@material-ui/core';

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


 const TableUser = () => {
  const REACT_APP_rooturl = process.env;
// or
 const classes =useStyles();
 const [recordForEdit , setRecordForEdit]= useState(null)
let history = useHistory(); 
const [data,setData] = useState(); 

const onFilter = ({ target: { value } }: any) => {
  setSelectedFilter(value);
  const filteredCols = [...cols];
  let filterList = [];
  if (value !== "All") {
    filterList = [value];
  }
  // Target the column to filter on.
  filteredCols[0].options.filterList = filterList;
  setCols(filteredCols);
};
const initCols = [   
  
    {
      name: "ID",
      label: "ID",
      options: {
      filter: false,
      display: false,
      },
    }, 
      {
          name: "EQUIPMENT_ID",
          label: "EQUIP ID",
        },
      
      {
        name: "EQUIPMENT_NAME",
        label: "EQUIP NAME",
        options: {
          filterList: []
        }
      },
      
      {
        name: "COMPLETE_SPECIFICATION",
        label: "SPECIFICATIONS",    
      
        options: {
          
          setCellProps: () => ({ style: { minWidth: "300px", maxWidth: "400px" }}),
          customBodyRender: (data, type, row) => {return <span>{data}</span>}
        },
      },
      {
        name: "DEPARTMENT",
        label: "DEPARTMENT",
      },
      {
        name: "DATE_OF_PURCHASE",
        label: "DOP",
        options: {
          filter: false,
          customBodyRender: (data, type, row) => {return <span>{data ? data.substring(0, 10): null}</span>}
        },
        
      },    
     
      {
        name: "COST_OF_EQUIPMENT",
        label: "COST",
        options: {
          customBodyRender: (data, type, row) => {return <span>₹ {data}</span>}
        },
      },
      
      {
        name: "UNIT_NAME",
        label: "UNIT NAME",
      },
      {
        name: "View",        
        label: "View",
        options: {  
          filter: false,          
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {        
          return (         
            <button className= "btn btn-primary btn-sm"  onClick={() => history.push(`/equipments/view-equipments/${tableMeta.rowData[0]}`)}>
             View</button>
           
        )            
        
      }  
    } 
  },
      
      // {
      // name: "Delete",
      //       options: {
      //         filter: false,
      //         sort: false,
      //         empty: true,
      //         customBodyRender: (value, tableMeta, updateValue) => {
      //           return ( 
      //             <Controls.Button
      //             color= "secondary"
      //              text="Delete"
      //             variant="outlined"          
      //             onClick={() => deleteUser(tableMeta.rowData[0])}
      //             />     
      //           );
      //         }
      //       }
      //     }, 
          
                                         
          {
            name: "Edit",        
            label: "Edit",
            options: {            
              sort: false,
              customBodyRender: (value, tableMeta, updateValue) => {        
              return (           
                <button className= "btn btn-outline-primary btn-sm"  onClick={() => history.push(`/equipments/edit-equipments/${tableMeta.rowData[0]}`)}>Edit</button>
              )          
          }  
        } 
      }
    ];  
  
  const [cols, setCols] = useState(initCols);
  const [selectedFilter, setSelectedFilter] = useState("All");
    const getData = async ()=>{
      try
      {
        //rooturl + '/api/testimonials/'
        axios.get(process.env.REACT_APP_rooturl + '/equipments')
        .then (res =>{setData(res.data.reverse())});  
        //http://localhost:3000/api/equipments
         
      }
      catch(err)
      {
        console.log(err)
      }
    }    
    useEffect(()=>{
      getData();
    },[]); 
    
    console.log(data)

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
getData();

}
    const getMuiTheme = () => createTheme({
      overrides: {
        MuiTableCell: {
          head: {
              backgroundColor: "#006680 !important",
                  
          },
         body: {
           // backgroundColor: "#006680 !important",
           padding: "2px !important",           
        },
        },
        MUIDataTableHeadCell: {
          toolButton: {
            color: "#a9b7d0 !important",
            fontSize: "12px !important",
            padding: "1px !important",  
          },
        },
        MUIDataTableBodyCell: {
          root: {
            padding: "2px !important",            
          }
        },        
      }
    })
  
   const handleRowClick = (rowData, rowMeta,tableMeta) => { 
  
      history.push(`/users/add/${rowData[0]}`)
 
  };
  
    const options = {     
     // onRowClick: handleRowClick,    
     setRowProps: (row, dataIndex, rowIndex) => ({
     onDoubleClick:( )=>{
     // alert("double click!"+row[0]);
      history.push(`/users/add/${row[0]}`)
     },     
    }),    
      responsive: 'scrollMaxHeight',
      filter: false,
     // filter: true,
      sort: true,
      selectableRows: 'multiple',
      selectableRowsHideCheckboxes: true,
      selectableRowsOnClick: false,
      selectableRowsHeader: false,
     // filterType: 'textField',
      //responsive: "scroll",
     // responsive: 'vertical',
     // responsive: "stacked", 
      rowsPerPage: 8,
      rowsPerPageOptions: [10, 15, 20], 
      downloadOptions:{
       filename:'Equipment.csv',
       separator:',',
       filterOptions:{
        useDisplayedColumnsOnly:true,
        useDisplayedRowsOnly:true,       
       }
     } 
    }
    
    const AddUser = () => {
      
          history.push("/equipments/add-new-equipments") 
          //setValues(initialFValues);
          //setErrors({})
      }

   // const {CloseForm }= useForm();
    return(
        <div className="container-fluid">            
            {/* <div>           
                        <Controls.Button
                            text="Add Equipment"
                            variant="outlined"
                            startIcon= {<AddIcon />}
                            onClick= {AddUser} 
                            className= {classes.newbutton}
                           />
                           <Controls.Button
                            text="Close"
                            //color="red"                          
                         //  onClick={CloseForm} 
                           />
                    </div>                    */}
      <diV className="py-0">
      <>
      
        <MuiThemeProvider theme={getMuiTheme()}>
        
          <MUIDataTable
            title={"equipments"}
            data={data}
            columns={cols}
            options={options}
            
            // +
          //  TOOLBAR_ITEMS= {TOOLBAR_ITEMS}            
          />
        </MuiThemeProvider>
      </>
      </diV>
      </div>
    )
  }

  export default TableUser;