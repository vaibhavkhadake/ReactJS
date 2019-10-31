import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Account from './account.svg';
import axios from 'axios';

import './CreateAccount.css'

class CreateAccount extends Component{
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
            field["firstName"] = "";
            field["lastName"] = "";
            field["mobileNumber"] = "";
            field["password"] = "";
            field["repassword"] = "";
            
            this.setState({ field: field})
            let data={
                "username":"9503359498",
                "password":"Vaibhav@1234"
            }
            console.log(data);
            axios
            .post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)
            .then(response=>{
                console.log(response)
            })
            .catch(err=>
                {
                    console.log("Error in CreateAccount",err);
                })
            this.props.history.push('/GoogleLogin')
        }

    }

    isValid() {
        let field = this.state.field;
        let error = {};

        let isVal = true;

        if (!field["firstName"]) {
            isVal = false;
            error["firstName"] = "Please enter First Name";
        }
        if (typeof field["firstName"] !== "undefined") {
            if (!field["firstName"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["firstName"] = "Please Enter only alphabets only";
            }
        }
        if (!field["lastName"]) {
            isVal = false;
            error["lastName"] = "Please enter Last Name";
        }
        if (typeof field["lastName"] !== "undefined") {
            if (!field["lastName"].match(/^[a-zA-Z]*$/)) {
                isVal = false;
                error["lastName"] = "Please Enter only alphabets only";
            }
        }

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

        if (!field["password"]) {
            isVal = false;
            error["password"] = "Please enter Password";
        }
        if (typeof field["password"] !== "undefined") {
            if (!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                isVal = false;
                error["password"] = "Please enter proper password minimum 8 digits";
            }
        }
        if (!field["repassword"]) {
            isVal = false;
            error["repassword"] = "Please enter Password";
        }
        if (typeof field["repassword"] !== "undefined") {
            if (!field["repassword"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/)) {
                isVal = false;
                error["repassword"] = "Please enter proper password minimum 8 digits";
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
            <div className="mainContainer10">
                 <div className="container10">
                <h2 align="left" ><span style={{color:'blue'}}>G</span>
                <span style={{color:'red'}}>O</span>
                <span style={{color:'yellow'}}>O</span>
                <span style={{color:'blue'}}>G</span>
                <span style={{color:'green'}}>L</span>
                <span style={{color:'red'}}>E</span></h2>
                <br/>
                <br/>
                <h2 style={{color:'brown'}} align="left">Create your Google Account</h2>
                <br/>
                <br/>
              
                    <div className="fname10">
                    <TextField
                        placeholder="Enter First Name"
                        name="firstName"
                        value={this.state.field.firstName}
                        onChange={this.handleChange}
                        margin="dense"
                        variant="outlined"
                       
                    />
                    <br/>
                     <span className="ErrorMessage">{this.state.error.firstName}</span>
       
                    </div>
                    
                <div className="lname10">
                    <TextField
                    
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={this.state.field.lastName}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                     />
                     <br/>
                      <span className="ErrorMessage">{this.state.error.lastName}</span>
                </div>

                
                
      
      
        <div className="mobileNumberwidth10">
                <TextField
                    name="mobileNumber"
                    placeholder="Enter Mobile Number "
                    value={this.state.field.mobileNumber}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                    fullWidth="5px"
                />
                <br/>
                <span className="ErrorMessage">{this.state.error.mobileNumber}</span>
        </div>
        
      
         <div className="password10">
     
                <TextField
                    type="password"
                    placeholder="Enter Password "
                    name="password"
                    value={this.state.field.password}
                    onChange={this.handleChange}
                    margin="dense"
                    variant="outlined"
                />
                 <br/>
                 <span className="ErrorMessage">{this.state.error.password}</span>
                 
                 <br/>

           </div>
            <div className="repassword10">
                <TextField
                type="password"
                placeholder="Enter Re-Password "
                name="repassword"
                value={this.state.field.repassword}
                onChange={this.handleChange}
                margin="dense" 
                variant="outlined"
             />
           <br/>
            <span className="ErrorMessage">{this.state.error.repassword}</span>
         </div>     
         
              
     <div  className="registerButton20" >

        <Button variant="contained" color="primary" onClick={this.submitForm} > Submit </Button>
         </div> 
     </div> 
            <div className="image10">
                
                <img src={Account} alt="Smiley face" height="75%" width="100%"/>
                <pre align="center"> One account. 
                All of Google working for you.</pre>
            </div>

    </div>
     
        )
    }
}
export default CreateAccount