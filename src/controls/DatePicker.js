  /*
import React from 'react'
//import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
//import DateFnsUtils from "@date-io/date-fns 2.22.1";
export default function DatePicker(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
      
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}

            />
        </MuiPickersUtilsProvider>
        
    )
}
*/
import React from 'react'
import { TextField } from '@material-ui/core';

export default function DatePicker(propsType) {

    const { name, label, value, type, error=null, onChange } = propsType;
    return (
        <TextField
            variant="standard"
            InputLabelProps={{shrink: true,}}
            size="small"
            label={label}
            type={type}            
            name={name}
            value={value}
           
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}

//<td><TextField label="Bill Date" type="date" InputLabelProps={{shrink: true,}} name="BILL_DATE" value={obj["BILL_DATE"]} onChange={setValues}/></td>                  