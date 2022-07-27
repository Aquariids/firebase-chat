import React, { useContext } from "react";
import { Toolbar, AppBar,Button,Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import {LOGIN_ROUTE} from '../../utils/consts'
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
const Navbar = () => {


    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container direction="row" justifyContent="flex-end">
                    {user ? 
                    <Button onClick={() => auth.signOut()} variant="contained">Выйти</Button>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                    <Button variant="contained">Логин</Button>
                    </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
