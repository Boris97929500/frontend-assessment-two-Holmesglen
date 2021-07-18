import Navbar from './Navbar';
import Footer from './Footer';



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    fontStyle: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem',
        },
    imageStyle: {
        width: '100%',
    }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={classes.fontStyle}>
                <div className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                            <ListItemText primary="Spam" />
                        </ListItemLink>
                    </List>
                </div>
                
            </div>
            <div>
                <img className={classes.imageStyle} src="./image/home.jpg" alt="imageForTable"></img>
            </div>
            <Footer />
        </div>
    );
}