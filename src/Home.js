import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     '& .MuiTextField-root': {
    //         margin: theme.spacing(1),
    //         width: 200,
    //     },
    // },
    // fontStyle: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     margin: '2rem',
    // },
    imageStyle: {
        width: '100%',
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
                <h1>Welcome to Moochi</h1>

                <div>
                    <img className={classes.imageStyle} src="./image/backgroundImageOne.jpg" alt="imageForShopping"></img>
                </div>
            <Footer />
        </div>
    )
}
