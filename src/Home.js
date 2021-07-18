import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

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
