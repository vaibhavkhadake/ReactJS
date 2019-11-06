import React,{Component} from 'react';
import './GoogleLogin.css'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";

import axios from 'axios';



class GoogleLogin extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {},
            snackbaropen:false,
            snackbarmessage:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    snackbarclose=(event)=>{
        this.setState({snackbaropen:false})
    }

    handleChange(event) {

        let field = this.state.field;
        field[event.target.name] = event.target.value;
        this.setState({ field })
       // console.log(field);
        
    }

    submitForm(event) {
        event.preventDefault();
          console.log("Login page",this.state.field);
        if (this.isValid()) {
            let field = {};
            
            field["username"] = "";
            field["password"] = "";

            console.log(this.state.field);
            axios
            .post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',this.state.field)
            .then(response=>{
                console.log(response)
                this.setState({snackbaropen:true ,snackbarmessage:'success'})
            })
            .catch(err=>
                {
                    console.log("Error in login",err);
                    this.setState({snackbaropen:true ,snackbarmessage:'failed'})
                })

           
            // this.setState({ field: field})
            // console.log(field);
            this.props.history.push('/')
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
            <Snackbar 
                anchorOrigin={{vertical:'bottom' ,horizontal:'left'}}
                open={this.state.snackbaropen}
                autoHideDuration={2000}
                onClose={this.state.snackbarclose}
                message={<span>{this.state.snackbarmessage}</span>}
                action={
                    [
                        <IconButton
                            key="close"
                            arial-label="close"
                            color="inherit"
                            onClick={this.snackbarclose}
                       />
                       
                    ]
                }
                />

            <h3 ><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>o</span>
                <span style={{color:'goldenrod'}}>o</span>
                <span style={{color:'blue'}}>g</span>
                <span style={{color:'green'}}>l</span>
                <span style={{color:'red'}}>e</span></h3>
               
                <p className="h2class" >Sign In</p>
             
                <p >Use your Google Account</p>
             <div className="mnumber">
                    < TextField
                    name="username"
                    label="User name"
                    placeholder="Enter User Name "
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth="10px"
                    />
             </div> 
            <div className="ErrorMessage">{this.state.error.username}</div>
            <div>
            

            < TextField required
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        autoComplete="current-password"
                        name="password"
                        value={this.state.field.password}
                        onChange={this.handleChange}
                        margin="dense"
                        variant="outlined"
                        fullWidth="10px"  
                    />
                    
            </div>

            { <Link to={'/LearnMore'}  className="nav-link">Forget Mobile Number? </Link> }<br/><br/>
                    
    
                  
                    <h5 className="h4class" style={{color:'silver'}}>Not your computer? Use Guest mode to sign in privately.</h5><br/><br/>
                    {/* { <Link to={'/LearnMore'}  className="nav-link">Learn More </Link> }<br/><br/> */}

                    { <Link to={'/CreateAccount'}  className="createAccount" > Create Account </Link> }<br/><br/><br/>

                    <Button className="registerButton23"  variant="contained" color="primary" onClick={this.submitForm} > Next </Button>
                    <br/>


        </div>
    )
}
   }
export default GoogleLogin;