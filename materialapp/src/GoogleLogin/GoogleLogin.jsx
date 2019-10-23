import React,{Component} from 'react';
import './GoogleLogin.css'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

class GoogleLogin extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    

    handleChange(event) {
        let field = this.state.field;
        field[event.target.name] = event.target.value;
        this.setState({ field })
    }

    submitForm(event) {
        event.preventDefault();
        if (this.isValid()) {
            let field = {};
            
            field["mobileNumber"] = "";
           
            this.setState({ field: field})
            console.log(field);


            this.props.history.push('/GooglePassword')
        }

    }

    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        

        if (!field["mobileNumber"]) {
            isVal = false;
            error["mobileNumber"] = "Please enter mobile Number";
        }
        if (typeof field["mobileNumber"] !== "undefined") {
            if (!field["mobileNumber"].match(/^[789][0-9]{9}$/)) {
                isVal = false;
                error["mobileNumber"] = "Please enter valid mobile number ";
            }
        }

        

        this.setState({
            error: error
        })
        return isVal;
    }



render()
{
    
    return(
        <div className="container1">

            <h2 ><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>O</span>
                <span style={{color:'yellow'}}>O</span>
                <span style={{color:'blue'}}>G</span>
                <span style={{color:'green'}}>L</span>
                <span style={{color:'red'}}>E</span></h2>
                <br/>
                <h1 style={{color:'red'}}>Sign In</h1>
                <br/>
                <h2 style={{color:'blue'}}>Use your Google Account</h2>
                <br/>
              
      <TextField
        id="outlined-email-input"
        label="MobileNumber"
        name="mobileNumber"
        placeholder="Enter Mobile Number "
        value={this.state.mobileNumber}
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
      />
                
                    <div className="ErrorMessage">{this.state.error.mobileNumber}</div>

                   <br/><br/>
                    <h4>Not your computer? Use Guest mode to sign in privately.</h4>
                    { <Link to={'/LearnMore'} className="nav-link">Learn More </Link> }<br/><br/><br/><br/>

                    { <Link to={'/CreateAccount'} className="createAccount" > Create Account </Link> }

                    <Button className="registerButton"  variant="contained" color="primary" onClick={this.submitForm} > Next </Button>
                    <br/>


        </div>
    )
}
   }
export default GoogleLogin;