import React, { useState,useEffect } from 'react'
import { makeStyles } from "@material-ui/core";
import {useHistory, useParams, Link,} from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/dom';

export function useForm(initialFValues, validateOnChange = false, validate) {
    let history = useHistory(); 
    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});
    // const [selects, setSelects] = useState({ data: null,  dept: null,equipName: null});
    const handleInputChange = e => {     
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
           
        // equipmentService.fetchData()
    }
    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }
    const CloseForm = () => {
        history.push("/users/table")         
        setErrors({})
    }

    // const AddUser = () => {
    //     history.push("/users/add") 
    //     //setValues(initialFValues);
    //     //setErrors({})
    // }
  

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
        CloseForm,
        //AddUser,
        // selects        

    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(propsType) {

    const classes = useStyles();
    const { children, ...other } = propsType;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {propsType.children}
        </form>
    )
}