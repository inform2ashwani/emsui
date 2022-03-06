import React from 'react'
import EquipmentForm from './EquipmentForm';
import AddUser from './AddUser';
import PageHeader from './PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(0)
    }
}))
export default function Equipments() {
    const classes = useStyles();
    return (
        <>
            <PageHeader
                title="New Equipment"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="small" />}
            />
            <Paper className={classes.pageContent}>
                <AddUser />
            </Paper>
        </>
    )
}