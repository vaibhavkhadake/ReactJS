import React,{Component} from 'react';
class Lname extends Component
{
    render()
    {
        return(
            
            <h4>Last Name :{this.props.lname} , City : {this.props.city}</h4>
          
        );
    }
}

export default Lname;