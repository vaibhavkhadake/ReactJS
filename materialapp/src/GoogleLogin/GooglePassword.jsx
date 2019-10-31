import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './GooglePassword.css'
import {Link} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
// import SnackbarContent from '@material-ui/core/SnackbarContent';
// import WarningIcon from '@material-ui/icons/Warning';
import IconButton from "@material-ui/core/IconButton";
import axios from 'axios'

class GooglePassword extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            field: {},
            error: {},
            snackbaropen:false,
            snackbarmessage:'',  
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
    }

    submitForm(event) {
        event.preventDefault();
        if (this.isValid()) {
            let field = {};
            field["username"]="";
            field["password"] = "";
            // this.setState({ field: field })
        //  let data=      {
        //         "username":"vaibhav",
        //         "password":"Vaibhav@1234"
        //         }
                
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

            this.props.history.push('/LearnMore')
        }
    }
    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        // if (!field["password"]) {
        //     isVal = false;
        //     error["password"] = "Please Enter Password";
        // }
        // if (typeof field["password"] !== "undefined") {
        //     if (!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
        //         // console.log(field["password"]);
        //         isVal = false;
        //         error["password"] = "Please enter proper password minimum 8 digits";
        //     }
        // }
        this.setState({
            error: error
        })
        return isVal;
    }
    render()
    {
        return(
            <div className="container2">
                <br/>
                <Snackbar 
                anchorOrigin={{vertical:'center' ,horizontal:'center'}}
                open={this.state.snackbaropen}
                autoHideDuration={4000}
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

            
                <h2><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>O</span>
                <span style={{color:'goldenrod'}}>O</span>
                <span style={{color:'blue'}}>G</span>
                <span style={{color:'green'}}>L</span>
                <span style={{color:'red'}}>E</span></h2>
                
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
                    { <Link to={'/GoogleForgetPassword'} className="nav-link">Forget Password </Link> } <br /> <br />
                     <Button className="registerButton"  variant="contained" color="primary" onClick={this.submitForm} > Next </Button>

             </div>
        )
    }
}
export default GooglePassword