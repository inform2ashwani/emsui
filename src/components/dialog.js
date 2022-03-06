//import * as React from 'react';
import React from "react";
//import Button from '@mui/material/Button';
import {Typography,Grid,TextField,
  makeStyles,Button,Dialog,
  DialogActions,DialogContent
  ,DialogContentText,DialogTitle,
  } from '@material-ui/core';
 import PropTypes from 'prop-types';
import { dialog } from "react-dom-factories";
//import { propTypes } from "react-bootstrap/esm/Image";
import AllEquipments from "src/views/users/AllEquipments";
import Controls from "src/controls/Controls";
import theme from "src/theme";
import CloseIcon from '@material-ui/icons/Close';

//import Typography from "src/views/theme/typography/Typography";
//import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
//import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
//import DialogTitle from '@mui/material/DialogTitle';
const useStyles = makeStyles(theme=> ({
dialogWapper: {
  padding: theme.spacing(2),
  position: "absolute",
  top: theme.spacing(5)
  },
dialogTitle: {
paddingRight:'0px'
},
dialogPaper: {       
  height : '630px',
},

}))
export default function FormDialog(props) {
  const {title,children,openPopup,setOpenPopup} = props;
 const classes =useStyles();
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog  classes={{ paper : classes.dialogPaper}}    
        open={openPopup}
        maxWidth="md"       
       // onClose={setOpenPopup}       
      >
        <DialogTitle className={classes.dialogTitle}>
          <div style={{display:"flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow:1}}>
            {title}
            </Typography>
            <Controls.Button       
            color="secondary"
        startIcon= {<CloseIcon />}
         onClick= {()=> setOpenPopup(false)} 
         // className= {classes.newbutton}
          />   
          </div>          
        </DialogTitle>
        <DialogContent>
         {children}
        </DialogContent>        
      </Dialog>
    </div>
  );
  FormDialog.propTypes={
    openPopup: PropTypes.string,
    setOpenPopup: PropTypes.string,
    title: PropTypes.string
  }
}