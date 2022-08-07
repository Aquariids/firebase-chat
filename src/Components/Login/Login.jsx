import { Container, Grid, Box, Button } from "@mui/material";
import { React, useContext } from "react";
import { Context } from "../../";
import styles from './Login.module.css';
import firebase from 'firebase/compat/app';
import MyButton from "../UI/MyButton/MyButton";


const Login = () => {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);

    }
    return (
        <div className={styles.login} style={{ height: window.innerHeight - 50, }}>
            <div className={styles.googleform}>
                <MyButton onClick={login} variant="outlined"> Войти с помощью Google</MyButton>
            </div>
        </div>
    );
};

export default Login;
