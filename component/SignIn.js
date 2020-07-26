import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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

export default SignInForm;
