import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(propsType) {

    const { name, label, value,error=null, onChange, options,options1 } = propsType;

    return (
        <FormControl  variant="standard"
        size="small"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}                
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {                    // {selects.equipName?.map((option) =>(<MenuItem value={option.EquipmentName}>{option.EquipmentName}</MenuItem>))}
                    options.map(
                    item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)                        
                    )                    
                }
               
                
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}