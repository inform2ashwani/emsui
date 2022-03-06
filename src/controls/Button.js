import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(propsType) {

    const { text, size, color, variant, onClick,submit,  ...other } = propsType
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            submit={submit}
            size={size || "small"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}