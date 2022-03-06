import React from "react";
import { useEffect, useState } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Controls from "../../controls/Controls";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory, useParams, Link, } from 'react-router-dom'
import { useForm, Form } from '../useForm';
//import { Button, Modal, Form, Table } from 'react-bootstrap';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import * as equipmentService from "../services/equipmentService";
import * as masterLookupService from "../services/mastersLookUpService";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import "react-toastify/dist/ReactToastify.css";
import FormDialog from 'src/components/dialog';
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
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});
const initialFValues = {  
  equipmentID: "",equipmentCode: "",equipNameID: "",categoryID: "",subCategoryID: "",  
  maintPeriodicityID: "", unitLookupID: "",specifications: "",departmentID: "", 
  costOfEquipment: "",dateOfInstallation: "2022-02-03T09:39:22.075Z",
  billDate: "2022-02-03T09:39:22.075Z",costOfEquipment: "",
  supplierID: "",statusID: "",remarks: "",isActive: true,
  createdDate: "2022-02-03T09:39:22.075Z",
  updatedDate: "2022-02-03T09:39:22.075Z",  
  dateOfInstallation: "string", billDeatils: "string",  
  //MODEL: "",  
  //BILL_DATE: "",  
}
const AddUser = (validateOnChange = false) => {

  const [errors, setErrors] = useState({});
  const [openPopup, setOpenPopup] = useState(false);
  const [values, setValues] = useState(initialFValues);
  const {id } = useParams();
  let history = useHistory();
  const [users, setUser] = useState([]);
    masterLookupService.masters(setUser)
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [selects, setSelects] = useState({ data: null, dept: null, equipName: null });
  const handleClose = () => setShow(false);
  //const handleSubmit = () => setUser;
  const handleShow = () => setShow(true);
  const notify = () => toast.info('Saved Successfully....', {
    position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: true, progress: undefined, textStyle: {
      textAlign: 'center'
    }
  });
  const [obj, setObj] = useState(initialFValues)   


  // console.log(`http://localhost:3000/api/equipmentsByDept/${value}`);

  const getData = async (name = '', value = '') => {
    //  console.log('http://localhost:3000/api/equipmentsById/' + name,value);  
    try {
      if (name == 'DEPARTMENT') {
        await axios.get(`http://localhost:3000/api/equipmentsByDept/${value}`)
          .then(res => {
            setUser(res.data.reverse())
          });
      }
      else if (name == 'EQUIPMENT_NAME') {
        await axios.get(`http://localhost:3000/api/equipmentsByEquipName/${value}`)
          .then(res => { setUser(res.data) });
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3000/api/equipmentsById/${id}`)
    setValues(result.data[0])
    //console.log(result.data)
    //setLoading(false)
  }
  useEffect(() => {
    loadUsers();
    // onSubmit()
    // fetchData()

  }, []);
  // console.log(`http://localhost:3000/api/equipmentsById/${id}`);

  const onSubmit = async () => {    
    if (id == null) {  
      equipmentService.insertEquipment()     
    }
    else {
      equipmentService.updateEquipment(values)
    }
    //resetForm()

    // history.push("/users/table") 
    //   await axios.post('http://localhost:3000/api/addEquipment',obj)  
    //   .then (responce => {
    //     if(responce.data !=null)
    //         {            //notify();
    //          alert ("Equipment Saved Successfully !")
    //          console.log(responce.data)
    //         }
    //       })

    //   .catch(error=>{
    //     console.log(error)
    // })      
    history.push("/users/table")

    setShow(false);
    //notify();
    console.log(values)
  }
   
  const fetchData = async () => {
    // console.log(obj);
    const equipName = await axios.get('http://localhost:3000/api/getAllEquipnames');

    const suppl = await axios.get('http://localhost:3000/api/getAllSuppliers');

    const dept = await axios.get('http://localhost:3000/api/getAlldepartments')

    setSelects({ equipName: equipName.data, dept: dept.data, suppl: suppl.data })
    //  console.log (selects)   
    // notify();

  }

  //console.log(selects.equipName);
  useEffect(() => {
    fetchData();
  }, []);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }

    // if ('fullName' in fieldValues)
    //     temp.fullName = fieldValues.fullName ? "" : "This field is required."
    // if ('email' in fieldValues)
    //     temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    // if ('mobile' in fieldValues)
    //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."     

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
    if ('specifications' in fieldValues)
      temp.COMPLETE_SPECIFICATION = fieldValues.specifications ? "" : "This field is required."
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
  const handleInputChange = e => {
    getData()
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    if (validateOnChange)
      validate({ [name]: value })
    getData(name, value);
  }
  //  const { 
  //  // values,
  //   //selects ,
  //  // setValues,
  //  // errors,
  //   //setErrors,
  //   //handleInputChange,
  //   //resetForm,
  //   //CloseForm 
  //  }= useForm(initialFValues, true, );   

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      onSubmit();

    }
  }
  const resetForm = () => {
    setValues(initialFValues);
    setErrors({})
  }

  const CloseForm = () => {
    history.push("/equipments")
    setErrors({})
  }

  //console.log(selects.equipName)   
  //console.log(equipmentService.getDepartmentCollection()) 
  // equipmentID: "",equipmentCode: "",equipNameID: "",categoryID: "",subCategoryID: "",  
  // maintPeriodicityID: "", unitLookupID: "",specifications: "",departmentID: "", 
  // costOfEquipment: "",dateOfInstallation: "2022-02-03T09:39:22.075Z",
  // billDate: "2022-02-03T09:39:22.075Z",costOfEquipment: "",
  // supplierID: "",statusID: "",remarks: "",isActive: true,
  // createdDate: "2022-02-03T09:39:22.075Z",
  // updatedDate: "2022-02-03T09:39:22.075Z",  
  // dateOfInstallation: "string", billDeatils: "string",  
  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Grid container>
          <Grid item xs={4}>
            <Controls.Select
              name="unitLookupID"
              label="Unit Name"
              required={true}
              value={values.unitLookupID}
              onChange={handleInputChange}
              options={masterLookupService.getUnitNameCollection()}
              error={errors.unitLookupID}
            />

            <Controls.Select
                        name="departmentID"
                        label="Department"
                        required = {true}
                        value={values.departmentID}
                        onChange={handleInputChange}
                        options={equipmentService.getDepartmentCollection()}
                        // options={selects.dept?.option}
                        error={errors.departmentID}
                    />                      

            {/* <FormControl className={classes.formControl}>
              <InputLabel id="DEPARTMENT-label">Department</InputLabel>
              <Select labelId="Department" id="DEPARTMENT" name="DEPARTMENT" value={values.DEPARTMENT} onChange={handleInputChange}
              // onChange={handleInputChange}  
              >
                {selects.dept?.map((option) => (<MenuItem key={option.Department} value={option.Department}>{option.Department}</MenuItem>))}
              </Select>
            </FormControl> */}

            <Controls.Select
                        name="equipNameID"
                        label="Equipment Name"
                        value={values.equipNameID}
                        onChange={handleInputChange}
                        options={equipmentService.getDepartmentCollection()}
                        error={errors.equipNameID}
                    />    

            {/* <FormControl className={classes.formControl}>
              <InputLabel id="equip_name-label">Equip Name</InputLabel>
              <Select labelId="equip_name-label" id="equip_name" name="EQUIPMENT_NAME" value={values.EQUIPMENT_NAME} onChange={handleInputChange}>
                {selects.equipName?.map((option) => (<MenuItem key={option.Equip_Name} value={option.Equip_Name}>{option.Equip_Name}</MenuItem>))}
              </Select>
            </FormControl> */}

            {/* <Controls.Select
                        name="EQUIPMENT_NAME"
                        label="Equipment Name"
                        value={values.EQUIPMENT_NAME}
                        onChange={handleInputChange} 
                        options1={selects.equipName}                     
                        error={errors.EQUIPMENT_NAME}
                         />            */}


            <Controls.Input
              label="Equipment ID"
              name="equipmentCode"
              value={values.equipmentCode}
              onChange={handleInputChange}
              error={errors.equipmentCode}
            />
            {/* <Controls.Input
              label="Equipment Model"
              name="MODEL"
              value={values.MODEL}
              onChange={handleInputChange}
            // error={errors.MODEL}  
            /> */}
            <Controls.Input
              label="Specification"
              name="specifications"
              value={values.specifications}
              multiline='multiline'
              rows="4"
              onChange={handleInputChange}
              error={errors.specifications}
            />
          </Grid>

          <Grid item xs={4}>
            <Controls.DatePicker
              name="dateOfInstallation"
              label="Date of Installation"
              type="date"
              value={values.dateOfInstallation}
              onChange={handleInputChange}
            />
            <Controls.DatePicker
              name="billDate"
              label="Bill Date"
              type="date"
              value={values.billDate}
              onChange={handleInputChange}
            />

            <Controls.Input
              label="Purchase Price"
              name="costOfEquipment"
              type="number"
              value={values.costOfEquipment}
              onChange={handleInputChange}
            />

            <Controls.Select
              name="Category"
              label="categoryID"
              value={values.categoryID}
              onChange={handleInputChange}
              options={equipmentService.getCategoryCollection()}
              error={errors.categoryID}
            />
            <Controls.Select
              name="subCategoryID"
              label="Sub Category"
              value={values.subCategoryID}
              onChange={handleInputChange}
              options={equipmentService.getSubCategoryCollection()}
            // error={errors.departmentId}
            />
            <Controls.Select
              name="statusID"
              label="Status"
              value={values.statusID}
              onChange={handleInputChange}
              options={equipmentService.getEquipmentStatusCollection()}
              error={errors.statusID}
            />
            {/* <Controls.Select
              name="WARRANTY"
              label="Warranty"
              type="number"
              value={values.WARRANTY}
              onChange={handleInputChange}
              options={equipmentService.getWarrantyCollection()}
            // error={errors.WARRANTY}
            /> */}

          </Grid>
          <Grid item xs={4}>
            <Controls.Select
              name="maintPeriodicityID"
              label="Maint Periodicity"
              value={values.maintPeriodicityID}
              onChange={handleInputChange}
              options={equipmentService.getMaintPeriodicityCollection()}
            // error={errors.MAINT_PERIODICITY}
            />
            <Controls.Select
              name="supplierID"
              label="Supplier"
              value={values.supplierID}
              onChange={handleInputChange}
              options={equipmentService.getDepartmentCollection()}
            // error={errors.departmentId}
            />
            <Controls.Input
              label="Remarks"
              multiline='multiline'
              rows="4"
              name="remarks"
              value={values.remarks}
              onChange={handleInputChange}
            />
            <Card className={classes.root}>
              <CardContent>

              </CardContent>
              <CardActions>
                {/* <input type="file" onChange={} /> */}
                {/* <button onClick={}>Uplaod</button> */}
                <Controls.Button
                  type="submit"
                  text="Upload Image" />
              </CardActions>
            </Card>

          </Grid>
          <div>
            <Controls.Button
              type="submit"
              text={"Submit"}
              onClick={handleSubmit} />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm}
            />
            <Controls.Button
              text="Close"
              //color="red"
              onClick={() => setOpenPopup(false)}
            //onClick={CloseForm} 
            />
            <FormDialog title="Add Equipment" openPopup={openPopup} setOpenPopup={setOpenPopup}>
              <AddUser />
            </FormDialog >

          </div>
        </Grid>
        {/* <table className="table table-striped">
  <thead className= "thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Equipment ID</th>
      <th scope="col">Equipment name</th>
      <th scope="col">Specification</th>
      <th scope="col">Department</th>
      <th scope="col">Cost</th>
      <th scope="col">Date of purchase</th>
      <th scope="col">Hosp name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  
  <tbody>
  
   {   
     users.map((user, index)=>
     <tr Key={user.EQUIPMENT_ID}>
    <th scope="row">{index+1}</th>
   <td>{user.EQUIPMENT_ID}</td>
   <td>{user.EQUIPMENT_NAME}</td>
   <td>{user.COMPLETE_SPECIFICATION}</td>
   <td>{user.DEPARTMENT}</td>
   <td>{user.COST_OF_EQUIPMENT}</td>
   <td>{user.DATE_OF_PURCHASE}</td>
   <td>{user.UNIT_NAME}</td>
   <td>{user.EQUIP_STATUS}</td>   
  
    </tr>)
   }
  </tbody> 
</table> */}
      </Form>
    </>

  )
}

//<ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>

export default AddUser;