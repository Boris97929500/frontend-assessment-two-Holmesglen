import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    title: {
        flexGrow: 1,
    },
    navlink: {
        color: "white",
        textDecoration: "none",
        padding: "0 1.1rem",
        fontWeight: "500",
        fontFamily: "Roboto, Helvetica, Arial, sans-serif"
    },
    logo: {
        width: "6rem",
        padding: "8px 0 0 0",
    }

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link  to="/"><img className={classes.logo} src="./image/logo.jpg" alt="brandlogo"></img></Link>
                    </Typography>
                    <Link className={classes.navlink} to="/form">Form</Link>
                    <Link className={classes.navlink} to="/list">List</Link>
                    <Link className={classes.navlink} to="/table">Table</Link>
                    <Link className={classes.navlink} to="/shop">Company Details</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

