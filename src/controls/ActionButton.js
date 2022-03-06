import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import Button from './Button';


const useStyles = makeStyles(theme => ({
    root: {minWidth:0,
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    },
    secondary : {

        backgroundColor: theme.palette.secondary.light,
        '& .MuiButton-lable':{
            color:theme.palette.secondary.main,
        }
    },
    primary : {

        backgroundColor: theme.palette.primary.light,
        '& .MuiButton-lable':
        {
            color:theme.palette.primary.main,
        }
        }
}))

export default function ActionButton(propsType) {

    const { color, children, onClick,  } = propsType;
    const classes = useStyles();

    return (
        <Button
        className= {`${classes.root}${classes[color]}`}
          onClick={onClick}>
          {children}           
        </Button>
    )
}
