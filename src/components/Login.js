import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Login = () => {

    const paperstyle = { padding :20,height:'71vh',width:280, margin:"0px auto"}
    const avatar = { backgroundColor: 'blue' }
    return (
        <Grid>
            <Paper elevation={20} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatar}><AccountBoxIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' fullWidth required></TextField>
                <br />
                <br />
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required></TextField>
                <br /><br />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember Me"
                />
                <br />
                <br />
                <Button type='submit' color='primary' fullWidth variant="contained" margin='20px 0'>Log In</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password ?
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )
}

export default Login;