import React, {Component} from 'react';
import Fname from './Fname';
class Demo extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            fname:"vaibhav",
           lname :"khadake"
        }
    }
    render()
    {
        return (
            <div>
                <h2>State example sub component</h2>
                <h4>My first name is:{this.state.fname}</h4>
                <h4>My last is :{this.state.lname}</h4>

                <Fname fname={this.state.fname}/>
            </div>
        );
    }
}

export default Demo;
