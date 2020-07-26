import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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

export default SignUpForm;
