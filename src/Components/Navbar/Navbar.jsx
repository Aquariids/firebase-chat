import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {LOGIN_ROUTE} from '../../utils/consts'
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";

import styles from './Navbar.module.css'
import MyButton from "../UI/MyButton/MyButton";
const Navbar = () => {


    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <header>
            <div className={styles.nav}>
                <div className={styles.content}>
                    {user ? 
                    <MyButton onClick={() => auth.signOut()} variant="contained">Выйти</MyButton>
                    :
                    <NavLink to={LOGIN_ROUTE}>
                    <MyButton>Логин</MyButton>
                    </NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;
