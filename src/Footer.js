import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    footer: {
       padding: '1rem 1rem',
        backgroundColor: '#169ae9',
        borderRadius: '3px',
    },
    footerIcon:{
        padding: '0 1rem',
    }
}));

export default function Footer() {

    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <footer>
                <a className={classes.footerIcon} href="https://www.facebook.com"><img src="../image/facebook_icon.png" /></a>
                <a className={classes.footerIcon}  href="https://twitter.com/?lang=en"><img src="../image/twitter_icon.png" /></a>
                
            </footer>

        </div>
    )
}
