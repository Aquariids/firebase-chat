import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../..';
import Loader from '../Loader/Loader';
import firebase from 'firebase/compat/app';
import styles from './Chat.module.css'
import cn from 'classnames';
import MyInput from '../UI/MyInput/MyInput';
const Chat = () => {


    
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy(
            'createdAt'
        )
    );

    if (loading) {
        return <Loader />
    }

    const sendMessage = async () => {

        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }


    return (
        <div>
            <div className={styles.container}>
                <div className={cn(styles.display, {})}>
                    {messages.map(message => {
                        return <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <div>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </div>
                            <div>
                                {message.text}
                            </div>
                        </div>
                    })}
                </div>
                <div
                    container
                    direction={"column"}
                    alignItems={'flex-end'}
                    style={{ width: '80%' }}
                >
                    <MyInput
                        onKeyDown={e => e.key === 'Enter' ? sendMessage() : ''}
                        value={value}
                        onChange={(e) => {setValue(e.target.value) }}
                    />
                    <Button onClick={sendMessage} variant={'outlined'}> Отправить </Button>
                </div>

            </div>
        </div>
    );
};

export default Chat;