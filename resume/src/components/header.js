//@mui/material is the updated one. Replace material-ui/core
import { Button, AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
//mport { makeStyles } from '@mui/material';
//import { makeStyles } from '@mui/styles';
import styles from '../webpage.css'
import React from 'react';


//const useStyles = {

    //buttons: {
        //marginLeft: 'auto'
    //}
//}


const Header = props => {
    const {title} = props;
    //{/*const classes = useStyles();*/}
    //const useStyles = {

        //buttons: {
            //marginLeft: 'auto'
        //
    //}
    

    return(
        <MuiAppBar>
            <Toolbar>
                {/*logo*/}
                <Typography variant="h6" component="h2" color="inherit" noWrap>
                    {title}
                </Typography>
                <div className={styles.hButtons}>
                    <Button color="inherit">Account</Button>
                    <Button color="inherit">Log In</Button>
                </div>
            </Toolbar>
        </MuiAppBar>
    );

};

export default Header;