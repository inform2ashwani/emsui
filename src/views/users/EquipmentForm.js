import React, { useState, useEffect } from 'react'
import { Grid,TextField,makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Controls from "../../components/controls/Controls";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Input from "../../components/controls/Input";
import { useForm, Form } from '../../components/useForm';
import * as equipmentService from "../../services/equipmentService";

//src\components\controls\Controls.js
const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const initialFValues = {
  EQUIPMENT_NAME:"",
  EQUIPMENT_ID:"",
  COMPLETE_SPECIFICATION:"",
  MODEL: "",DEPARTMENT: "",
  DATE_OF_PURCHASE: "",
  BILL_DATE: "",
  COST_OF_EQUIPMENT: "",
  EQUIP_STATUS: "OK",
  UNIT_NAME: "Beas Hosp",
  EQUIP_REMARKS: "",
  CATEGORY: "Medical",
  SUBCATEGORY: "",
  WARRANTY: "1",
  MAINT_PERIODICITY: "Quarterly",
  SUPPLIER: ""
}

export default function EquipmentForm() { 

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."     

        if ('WARRANTY' in fieldValues)
        temp.WARRANTY = fieldValues.WARRANTY.length != 0 ? "" : "This field is required."

   if ('CATEGORY' in fieldValues)
        temp.CATEGORY = fieldValues.CATEGORY.length != 0 ? "" : "This field is required."

    if ('EQUIPMENT_ID' in fieldValues)
        temp.EQUIPMENT_ID = fieldValues.EQUIPMENT_ID.length != 0 ? "" : "This field is required."

    if ('MAINT_PERIODICITY' in fieldValues)
        temp.MAINT_PERIODICITY = fieldValues.MAINT_PERIODICITY ? "" : "This field is required."

    if ('EQUIP_STATUS' in fieldValues)
        temp.EQUIP_STATUS = fieldValues.EQUIP_STATUS ? "" : "This field is required."
     if ('COMPLETE_SPECIFICATION' in fieldValues)
        temp.COMPLETE_SPECIFICATION= fieldValues.COMPLETE_SPECIFICATION? "" : "This field is required."
    if ('EQUIPMENT_ID' in fieldValues)
        temp.EQUIPMENT_ID = fieldValues.EQUIPMENT_ID.length != 0 ? "" : "This field is required."
    if ('EQUIPMENT_NAME' in fieldValues)
        temp.EQUIPMENT_NAME = fieldValues.EQUIPMENT_NAME.length != 0 ? "" : "This field is required."
    if ('DEPARTMENT' in fieldValues)
        temp.DEPARTMENT = fieldValues.DEPARTMENT.length != 0 ? "" : "This field is required."
    if ('UNIT_NAME' in fieldValues)
        temp.UNIT_NAME = fieldValues.UNIT_NAME.length != 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
   
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    const { 
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
     }= useForm(initialFValues, true, validate);
    
     const handleSubmit = e => {
      e.preventDefault()
      if (validate()){
          equipmentService.insertEquipment(values)
          resetForm()
      }
    }
    return(
            <Form onSubmit={handleSubmit} >
            <Grid container>
                <Grid item xs={4}>
                <Controls.Select
                        name="UNIT_NAME"
                        label="Unit Name"
                        required = {true}
                        value={values.UNIT_NAME}
                        onChange={handleInputChange}
                        options={equipmentService.getUnitNameCollection()}
                        error={errors.UNIT_NAME}
                    />   
                  
                    <Controls.Select
                        name="DEPARTMENT"
                        label="Department"
                        required = {true}
                        value={values.DEPARTMENT}
                        onChange={handleInputChange}
                        options={equipmentService.getDepartmentCollection()}
                       error={errors.DEPARTMENT}
                    />   
                    <Controls.Select
                        name="EQUIPMENT_NAME"
                        label="Equipment Name"
                        value={values.EQUIPMENT_NAME}
                        onChange={handleInputChange}
                        options={equipmentService.getDepartmentCollection()}
                        error={errors.EQUIPMENT_NAME}
                    />               
                <Controls.Input                  
                    label="Equipment ID"   
                    name="EQUIPMENT_ID"                   
                    value={values.EQUIPMENT_ID}
                    onChange={handleInputChange}
                    error={errors.EQUIPMENT_ID}
                    />
                    <Controls.Input                  
                    label="Equipment Model"   
                    name="MODEL"                   
                    value={values.MODEL}
                    onChange={handleInputChange}
                    />
                    <Controls.Input                  
                    label="Specification"
                    name="COMPLETE_SPECIFICATION"
                    value={values.COMPLETE_SPECIFICATION}     
                    multiline = 'multiline' 
                    rows = "4"                 
                    onChange={handleInputChange}
                    error={errors.COMPLETE_SPECIFICATION}
                    />
                    </Grid>                    
                           
                    <Grid item xs={4}>
                   
                    <Controls.DatePicker
                        name="DATE_OF_PURCHASE"
                        label="Date of Purchase"
                        type="date"                        
                        value={values.DATE_OF_PURCHASE}                       
                        onChange={handleInputChange}
                    />
                     <Controls.DatePicker
                        name="BILL_DATE"
                        label="Bill Date"
                        type="date"                        
                        value={values.BILL_DATE}                       
                        onChange={handleInputChange}
                    />
                      
                      <Controls.Input                  
                    label="Purchase Price"   
                    name="COST_OF_EQUIPMENT" 
                    type="number"                  
                    value={values.COST_OF_EQUIPMENT}
                    onChange={handleInputChange}
                    />
                   
                      <Controls.Select
                        name="CATEGORY"
                        label="Category"
                        value={values.CATEGORY}
                        onChange={handleInputChange}
                        options={equipmentService.getCategoryCollection()}
                       error={errors.CATEGORY}
                    />                          
                         <Controls.Select
                        name="SUBCATEGORY"
                        label="Sub Category"
                        value={values.SUBCATEGORY}
                        onChange={handleInputChange}
                        options={equipmentService.getSubCategoryCollection()}
                        // error={errors.departmentId}
                    /> 
                     <Controls.Select
                        name="EQUIP_STATUS"
                        label="Status"
                        value={values.EQUIP_STATUS}
                        onChange={handleInputChange}
                        options={equipmentService.getEquipmentStatusCollection()}
                        error={errors.EQUIP_STATUS}
                    />       
                     <Controls.Select
                        name="WARRANTY"
                        label="Warranty"
                        type="number"
                        value={values.WARRANTY}
                        onChange={handleInputChange}
                        options={equipmentService.getWarrantyCollection()}
                        error={errors.WARRANTY}
                    />        
                                         
                    </Grid>
                    <Grid item xs={4}>
                    <Controls.Select
                        name="MAINT_PERIODICITY"
                        label="Maint Periodicity"
                        value={values.MAINT_PERIODICITY}
                        onChange={handleInputChange}
                        options={equipmentService.getMaintPeriodicityCollection()}
                        error={errors.MAINT_PERIODICITY}
                    />                        
                    <Controls.Select
                        name="SUPPLIER"
                        label="Supplier"
                        value={values.SUPPLIER}
                        onChange={handleInputChange}
                        options={equipmentService.getDepartmentCollection()}
                        // error={errors.departmentId}
                    />                     
                    <Controls.Input                  
                    label="Remarks"
                    multiline = 'multiline' 
                    rows = "4"            
                    name="EQUIP_REMARKS"                    
                    value={values.EQUIP_REMARKS}
                    onChange={handleInputChange}
                    />    
                      <Card className={classes.root}>
      <CardContent>
        
      </CardContent>
      <CardActions>
      <Controls.Button
        type="submit"
        text="Upload Image" />
      </CardActions>
    </Card>                                     
                          
                    </Grid>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                          onClick={resetForm} 
                           />
                    </div>                   
                </Grid>


                </Form>

    
    )
}