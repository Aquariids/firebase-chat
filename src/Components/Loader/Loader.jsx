import React from 'react';
import { Container, Grid, Box, Button } from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{ height: window.innerHeight - 50 }}
            >

                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems={'center'}
                >
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

                </Grid>


            </Grid>
        </Container>
    );
};

export default Loader;