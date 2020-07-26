import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        background: "#4287f5",
    },
    paper: {
        width: "100%",
        height: "100%",
    },
    paperGrid: {
        height: "50vh",
    },
    textField: {
        size: 100,
    },
});

function SignInForm(props) {
    return (
        <Fragment>
            <Grid item>
                <TextField label="Username" autoFocus />
            </Grid>
            <Grid item>
                <TextField label="Password" type="password" />
            </Grid>
            <Grid item>
                <Button variant="contained">Sign In</Button>
            </Grid>
        </Fragment>
    );
}

function SignUpForm(props) {
    return (
        <Fragment>
            <Grid item>
                <TextField label="Email" autoFocus />
            </Grid>
            <Grid item>
                <TextField label="Password" type="password" />
            </Grid>
            <Grid item>
                <TextField label="Retype Password" type="password" />
            </Grid>
            <Grid item>
                <Button variant="contained">Sign Up</Button>
            </Grid>
        </Fragment>
    );
}

function Home(props) {
    const classes = useStyles();
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    container
                    item
                    xs={10}
                    sm={6}
                    className={classes.paperGrid}
                >
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid
                                container
                                item
                                direction="row"
                                spacing={0}
                                justify="center"
                            >
                                <Grid item>
                                    <Button
                                        onClick={() => setIsSignIn(true)}
                                        color="primary"
                                        size="large"
                                    >
                                        Sign In
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={() => setIsSignIn(false)}
                                        color="secondary"
                                        size="large"
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                            {isSignIn ? <SignInForm /> : <SignUpForm />}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default Home;
