import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../..';
import Loader from '../Loader/Loader';
import firebase from 'firebase/compat/app';

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
        <Container>
            <Grid
                container
                justifyContent="center"
                style={{ height: window.innerHeight - 50, }}
            >
                <div style={{ width: '80%', height: '70vh', border: '1px solid black', overflowY: 'auto', marginTop: 20 }}>
                    {messages.map(message => {
                        return <div style={{
                            margin: 10, 
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto': '10px',
                            wigth: 'fit-content',
                            padding: 5
                        }}>
                            <Grid>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>
                                {message.text}
                            </div>
                        </div>
                    })}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={'flex-end'}
                    style={{ width: '80%' }}
                >
                    <TextField
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        fullWidth
                        variant={'outlined'} />
                    <Button onClick={sendMessage} variant={'outlined'}> Отправить </Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Chat;