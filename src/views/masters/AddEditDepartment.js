import React from "react";
import {useEffect, useState} from 'react';
import {Typography,Grid,TextField,
  makeStyles,Button,Dialog,
  DialogActions,DialogContent
  ,DialogContentText,DialogTitle
  } from '@material-ui/core';
import { useForm, Form } from '../useForm';
import FormDialog from 'src/components/dialog';
import theme from "src/theme";
import axios from "axios"
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme=> ({
  dialogWapper: {padding: theme.spacing(2),position: "absolute",top: theme.spacing(5)},
  dialogTitle: {paddingRight:'0px'},dialogPaper: {height : '300px',},  
  }))
  

  export default function AddEditDepartment(props)
  {
  const [errors, setErrors] = useState({}); 
  const {open,handleClose,data,onChange,handleFormSubmit}=props; 
  const {name,id}=data;
  const classes =useStyles();
  const url= process.env.REACT_APP_rooturl

 
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
          <DialogTitle id="alert-dialog-title">{id?"Update Department":"Create new Department"}</DialogTitle>
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
        <TextField id="name" value={name} onChange={e=>onChange(e)} placeholder="Enter Department" label="Name" variant="outlined" margin="dense" fullWidth />
       </Grid>
         </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button  color="primary" onClick={()=>handleFormSubmit()} variant="contained">
           {id?"Update":"Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}

