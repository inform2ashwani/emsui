import React from 'react'
import { TextField } from '@material-ui/core';
export default function Input(propsType) {    
    const { name, label, value,error=null,multiline,rows, required, onChange } = propsType;
    return (        
        <TextField       
            required = {required}
            //InputLabelProps={{shrink: true}}
            variant="standard"
            size="small" 
            multiline = {multiline}
            rows={rows}         
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}