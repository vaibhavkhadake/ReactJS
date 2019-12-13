import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
// import './GooglePassword.css'
import './GoogleLogin.css'
import {Link} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import WarningIcon from '@material-ui/icons/Warning';
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios';
import { Paper, Card } from '@material-ui/core';

class GooglePassword extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {},
            userData:[],
            snackbaropen:false,
            snackbarmessage:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };

    snackbarclose=()=>{
        this.setState({snackbaropen:false})
    }
   


    handleChange(event) {
        let field = this.state.field;
        field[event.target.name] = event.target.value;
        this.setState({ field })
    }

    submitForm(event) {
        event.preventDefault();
        if (this.isValid()) {
            let field = {};
            field["username"]="";
            field["password"] = "";
                
            console.log(this.state.field);
            axios
            .post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',this.state.field)
            .then(response=>{
                console.log(response);
                this.userData = response.data.data;
                console.log(response.data.userId);
                console.log(response.data.email);
                // console.log("label id",response.data.id);
                let token = response.data.id;
                console.log(token);
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('lastName', response.data.lastName);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('token', token);
                localStorage.setItem('userId', response.data.userId);
                // localStorage.setItem('id',response.data.id);
                
                this.setState({snackbaropen:true ,snackbarmessage:'success'})
                this.props.history.push('/dashboard')
            })
            .catch(err=>
                {
                    console.log("Error in login",err);
                    this.setState({snackbaropen:true ,snackbarmessage:' Login Failed ',userData:this.state.userData})
                })

        }
    }
    isValid() {
         let field = this.state.field;
        let error = {};

        let isVal = true;

        if (!field["password"]) {
            isVal = false;
            error["password"] = "Please Enter Password";
        }
        if (typeof field["password"] !== "undefined") {
            if (!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                // console.log(field["password"]);
                isVal = false;
                error["password"] = "Please enter proper password minimum 8 digits";
            }
        }

        if (!field["username"]) {
            isVal = false;
            error["username"] = "Please enter username";
        }
        if (typeof field["firstName"] !== "undefined") {
            if (!field["username"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["username"] = "Please Enter valid username ";
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
            <Card >
            <Paper>
            <div className="container1">
               
            {/* <div className="container2"> */}
                <br/>
                <Snackbar 
                open={this.state.snackbaropen}
                anchorOrigin={{vertical:'bottom' ,horizontal:'left'}}
                
                autoHideDuration={4000}
                onClose={this.snackbarclose}
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
            <div className="ErrorMessage">{this.state.error.password}</div>
            <div>
            
                    
            </div>

            { <Link to={'/LearnMore'}  className="nav-link">Forget Mobile Number? </Link> }<br/><br/>
                    
    
                  
                    <h5 className="h4class" style={{color:'silver'}}>Not your computer? Use Guest mode to sign in privately.</h5><br/><br/>
                    {/* { <Link to={'/LearnMore'}  className="nav-link">Learn More </Link> }<br/><br/> */}

                    { <Link to={'/CreateAccount'}  className="createAccount" > Create Account </Link> }<br/><br/><br/>

                    <Button className="registerButton23"  variant="contained" color="primary" onClick={this.submitForm} > Next </Button>
                    <br/>



            
                {/* <h4><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>O</span>
                <span style={{color:'goldenrod'}}>O</span>
                <span style={{color:'blue'}}>G</span>
                <span style={{color:'green'}}>L</span>
                <span style={{color:'red'}}>E</span></h4>
                
                <br/>
                <h1>Welcome</h1>
                <br/>
               
                <div className="mnumber">
                    < TextField
                    name="username"
                    placeholder="Enter UserName Number "
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth="10px"
                    />
             </div> 
            <div className="ErrorMessage">{this.state.error.mobileNumber}</div>
                <TextField required
                        
                        
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="current-password"
                        name="password"
                        value={this.state.field.password}
                        onChange={this.handleChange}
                        margin="dense"
                        variant="outlined"
                        fullWidth="10px"  
                    />
                    
                     <div className="ErrorMessage">{this.state.error.password}</div>
                    <br />
                    { <Link to={'/GoogleForgetPassword'} className="nav-link" >Forget Password </Link> } <br /> <br />
                     <Button className="registerButton"  variant="contained" color="primary" onClick={this.submitForm} > Next </Button> */}
                
             </div>
             </Paper>
             </Card>
        )
    }
}
export default GooglePassword