import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
                <a className={classes.footerIcon} href="https://www.facebook.com"><img src="../image/facebook_icon.png" alt="facebookLink"/></a>
                <a className={classes.footerIcon}  href="https://twitter.com/?lang=en"><img src="../image/twitter_icon.png" alt="twitterLink" /></a>
                
            </footer>

        </div>
    )
}
