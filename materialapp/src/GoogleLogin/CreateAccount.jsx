import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import InputAdornment from '@material-ui/core/InputAdornment';
import './account.svg'

import './CreateAccount.css'

class CreateAccount extends Component{
    render()
    {
        return(
            <div className="container">
                <h2 style={{color:'blue'}}>Google</h2>
                <h2 style={{color:'brown'}}>Create your Google Account</h2>
                <TextField
        id="outlined-name"
        label="firstName"
        
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
     <TextField
        id="outlined-name"
        label="lastName"
        
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <br/>

      <TextField
        id="outlined-name"
        label="mobileNumber"
        className="mobileNumberwidth"
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
         fullWidth="5px"
      />
     <h4 style={{color:'red'}}>You Can use letter,number and periods</h4>

     <TextField
        id="outlined-password-input"
        label="Password"
       
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
         <TextField
        id="outlined-password-input"
        label="Re-Type-Password"
       
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
                    <br/>
                    
     
     

<Button className="registerButton"  variant="contained" color="primary" onClick={this.submitForm} > Submit </Button>
            </div>
        )
    }
}
export default CreateAccount