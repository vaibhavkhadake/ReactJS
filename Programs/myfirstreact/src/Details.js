import React , {Component} from 'react'

class Details extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            fullname:"Amar Patil"

        }
    }
    componentWillMount()
    {
        console.log("Welcome to compound Will Mount method");
        
    }
    componentDidMount()
    {
        console.log("Welcome to did mount");
    }
    render()
    {  
        console.log("Render method");
        return (
        <h1>Full Name:{this.state.fullname}</h1>
        );
    }
    // componentDidMount()
    // {
    //     console.log("Welcome to did mount");
    // }
    componentWillUnmount()
    {
        console.log("Unmount State");
    }

   
}

export default Details;