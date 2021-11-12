import { makeStyles } from '@material-ui/core'
import React from 'react'


const UseStyles = makeStyles((theme) => ({
    toolbar: {
        height: '8vh',
        width: '100vw',
        backgroundColor: '#000',
        opacity: '0.2'
    },
}))

export default function Toolbar() {
    const classes = UseStyles();

    return (
        <div>
            <div className={classes.toolbar}></div>
        </div>
    )
}


