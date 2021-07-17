import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { style } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
                        Moochi
                    </Typography>
                    <Link className={classes.navlink} to="/form">Form</Link>
                    <Link className={classes.navlink} to="/list">List</Link>
                    <Link className={classes.navlink} to="/table">Table</Link>
                    <Link className={classes.navlink} to="/shop">Company Details</Link>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

