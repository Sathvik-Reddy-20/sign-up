import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
const Signup = () => {
  const paperstyle = {padding: 20, width: 280, margin: "0px auto"}
  const headerstyle = { margin: 0 }
  const radiostyle = { display: 'initial' }
  const marginTop = { marginTop: 5 }
  return (
    <Grid>
      <Paper elevation={20} style={paperstyle}>
        <Grid align='center'>
          <Avatar />
          <h2 style={headerstyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>
            Please fill this form to create new account!!
            </Typography>
            
        </Grid>
        <form>
          <TextField fullWidth label='First Name*'></TextField><br />
          <TextField fullWidth label='Last Name*'></TextField><br />
          <TextField fullWidth label='Phone Number'></TextField><br />      
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup blue-label="gender" name="gender" style={radiostyle} >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label='Email*'></TextField><br /><br />
          <TextField fullWidth label='Password*'></TextField><br />
          <TextField fullWidth label='Verify Your Password*'></TextField><br /><br />
          <Button type='submit' color='primary' fullWidth variant="contained" margin='20px 0'>Sign Up</Button>
        </form>
      </Paper>
    </Grid>
  )
}
export default Signup;