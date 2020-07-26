import React, { Fragment } from "react";
import { Grid, Card, TextField, Button } from "@material-ui/core";

function Home(props) {
    return (
        <Fragment>
            <form>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <TextField label="Username" />
                    <TextField label="Password" type="password" />
                    <Button>Sign In</Button>
                </Grid>
            </form>
        </Fragment>
    );
}

export default Home;
