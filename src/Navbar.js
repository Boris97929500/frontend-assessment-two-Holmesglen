import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import {useMediaQuery} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
    navlink: {
        color: "white",
        textDecoration: "none",
        padding: "0 1.1rem",
        fontWeight: "500",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        [theme.breakpoints.down('xs')]:{
            padding: '.5rem',
        },
    },
    logo: {
        width: "6rem",
        padding: "8px 0 0 0",
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },

        navContainer:{
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'100%',
        },
    },
    homeNav: {
        color: "white",
        textDecoration: "none",
        padding: "0 1.1rem",
        fontWeight: "500",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        [theme.breakpoints.up('xs')]:{
            display: 'none',
        },
        [theme.breakpoints.down('xs')]:{
            display: 'flex',
            padding: '.5rem',
        },


    }

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link  to="/"><img className={classes.logo} src="./image/logo.jpg" alt="brandlogo"></img></Link>
                    </Typography>
                    <div className={classes.navContainer}>
                        <Link className={classes.homeNav} to="/">Home</Link>
                        <Link className={classes.navlink} to="/form">Form</Link>
                        <Link className={classes.navlink} to="/list">List</Link>
                        <Link className={classes.navlink} to="/table">Table</Link>
                        <Link className={classes.navlink} to="/shop">Company Details</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

