import React from 'react';
import { useEffect, useState } from 'react';
import {Typography,Grid,TextField,
  makeStyles,Button,Dialog,
  DialogActions,DialogContent
  ,DialogContentText,DialogTitle
  } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm, Form } from '../useForm';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import theme from "src/theme";
import CloseIcon from '@material-ui/icons/Close';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';
import axios from "axios"

const useStyles = makeStyles(theme=> ({
  dialogWapper: {padding: theme.spacing(2),position: "absolute",top: theme.spacing(5)},
  dialogTitle: {paddingRight:'0px'},dialogPaper: {height : '630px',},  
  }))

export default function AddEditEquipment(props)
{
 const [errors, setErrors] = useState({});
 const [selects, setSelects] = useState({ data: null, dept: null, equipName: null });
 const {open,handleClose,data,onChange,handleFormSubmit}=props;

 const {equipmentID,equipmentCode,equipNameID,dateOfPurchase,billDate,costOfEquipment,categoryID,subCategoryID,
  maintPeriodicityID,unitLookupID,specifications,departmentID,supplierID,
  statusID,remarks}=data;
 const classes =useStyles();

 const url= process.env.REACT_APP_rooturl
 const masterData = async () => {
  await axios.get(url+=`/MasterLookup`)  
 .then (responce => {if(responce.data !=null)
  { 
  setSelects({equipName: responce.data.categoryLookup, dept: responce.data.categoryLookup, suppl: responce.data.categoryLookup })           
  console.log(responce.data.categoryLookup)
  }
  })    
 .catch(error=>{
   console.log(error)
}) 
} 
 
  return (
    <div>
      <Dialog classes={{paper : classes.dialogPaper}}
        open={open}
        maxWidth="md" 
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.dialogTitle}>
          <div style={{display:"flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow:1}}>
            Add Equipment
            </Typography>           
            <Button  color="secondary"  onClick= {handleClose}>        
            {<CloseIcon />}    
         </Button>         
          </div>          
        </DialogTitle>
        {/* <DialogTitle id="alert-dialog-title">{id?"Update user":"Create new user"}</DialogTitle> */}
        <DialogContent>
         <Form>
        <Grid container spacing={1}>
        <Grid item xs={4}>              
        <TextField id="unitLookupID" value={unitLookupID} onChange={e=>onChange(e)}  label="Hosp Name" variant="standard" margin="dense" fullWidth />
        <TextField id="departmentID" value={departmentID} onChange={e=>onChange(e)}  label="Department Name" variant="standard" margin="dense" fullWidth />        
        <TextField id="equipNameID" value={equipNameID} onChange={e=>onChange(e)}  label="Equipment Name" variant="standard" margin="dense" fullWidth />
        <TextField id="equipmentCode" value={equipmentCode} onChange={e=>onChange(e)} label="Equipment ID" variant="standard" margin="dense" fullWidth />
        <TextField id="specifications"  multiline='multiline'
        rows="4"value={specifications} onChange={e=>onChange(e)} label="Specifications" variant="standard" margin="dense" fullWidth />
        </Grid>
        <Grid item xs={4}>     
        <TextField id="dateOfPurchase" value={dateOfPurchase} onChange={e=>onChange(e)}   type = "date"   label="Date Of Purchase"  InputLabelProps={{shrink: true,}} variant="standard" margin="dense" fullWidth />
        <TextField id="billDate" value={billDate} onChange={e=>onChange(e)}   type = "date"   label="Date Of Bill"   InputLabelProps={{shrink: true,}} variant="standard" margin="dense" fullWidth />
        <TextField id="costOfEquipment" value={costOfEquipment} onChange={e=>onChange(e)}  label="Price" variant="standard" margin="dense" fullWidth />
        <TextField id="categoryID" value={categoryID} onChange={e=>onChange(e)}  label="Category" variant="standard" margin="dense" fullWidth />
        <TextField id="subCategoryID" value={subCategoryID} onChange={e=>onChange(e)} label="Sub Category" variant="standard" margin="dense" fullWidth />
        <TextField id="statusID" value={statusID} onChange={e=>onChange(e)}  label="Status" variant="standard" margin="dense" fullWidth />
        </Grid>
        <Grid item xs={4}>
        <TextField id="maintPeriodicityID" value={maintPeriodicityID} onChange={e=>onChange(e)} label="Maint Periodicity" variant="standard" margin="dense" fullWidth />
        <TextField id="supplierID" value={supplierID} onChange={e=>onChange(e)} label="Supplier" variant="standard" margin="dense" fullWidth />
        <TextField id="remarks" multiline='multiline'
        rows="4" value={remarks} onChange={e=>onChange(e)} label="Remarks" variant="standard" margin="dense" fullWidth />
        </Grid>
        </Grid>
         </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
           {equipmentID?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  AddEditEquipment.propTypes={
   // {open,handleClose,data,onChange,handleFormSubmit}
    open:PropTypes.string,
    handleClose:PropTypes.string,
    data: PropTypes.string,
    onChange:PropTypes.string,
    handleFormSubmit:PropTypes.string
    // openPopup: PropTypes.string,
    // setOpenPopup: PropTypes.string,
    // title: PropTypes.string
  }
}