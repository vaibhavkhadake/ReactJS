import React ,{Component} from 'react';
import './register.css';
class RegisterForm extends Component
{
    constructor()
    {
        super()
        this.state={
            field:{},
            error:{}
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    };

    handleChange(event)
    {
        let field=this.state.field;
        field[event.target.name]=event.target.value;
        this.setState({field})
    }

    submitForm(event)
    {
        event.preventDefault();
        if(this.isValid())
        {
        let field={};
        field["username"]="";
        field["password"]="";

        this.setState({field:field})
        alert("Form Submitted successfully");
        }

    }

    isValid()
    {
        let field=this.state.field;
        let error={};

        let isVal=true;

        if(!field["username"])
        {
            isVal=false;
            error["username"]="Please enter User Name";
        }
        if(typeof field["username"]!=="undefined")
        {
            if(!field["username"].match(/^[a-zA-Z]*$/))
            {
                isVal=false;
                error["username"]="Please Enter only alphabets only";
            }
        }
        
        if(!field["password"])
        {
            isVal=false;
            error["password"]="Please enter Password";
        }
        if(typeof field["password"]!=="undefined")
        {
            if(!field["password"].match(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{7,20}$/))
            {
                isVal=false;
                error["password"]="Please enter proper password minimum 8 digits";
            }
        }

        this.setState({
            error:error
        })
        return isVal;
    }

    render()
    {
        return(
                <div className="reg" >
                    <h2>Welcome to Registration Form</h2>
                    <form method="get" name="registerForm" onSubmit={this.submitForm}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.field.username} onChange={this.handleChange} />
                    <div className="ErrorMessage">{this.state.error.username}</div>
                    <br/>

                    <label>Password</label>
                    <input type="Password" name="password" value={this.state.field.password} onChange={this.handleChange}/>
                    <div className="ErrorMessage">{this.state.error.password}</div>
                    <br/>

                    <input type="submit" value="Submit" width={50} />
                    </form>
                </div>


        )
    }
}
export default RegisterForm;