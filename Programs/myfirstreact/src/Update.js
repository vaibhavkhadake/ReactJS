import React,{Component} from 'react';

class Update extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            favColor:"Black"
        }

    }
    componentDidMount()
    {
        setTimeout(()=>
        {
            this.setState({favColor:"skyblue"})
            console.log("SkyBlue color");
                },5000)
    }
    shouldComponentUpdate()
    {
        console.log("Should Component Update method");
        return true;
      
    }
    componentDidUpdate()
    {
        console.log("Did Component Update method");
        console.log(this.state.favColor);
    }
    render()
    {
        return (
            <div>
            <h4>Favorite Color : {this.state.favColor}</h4>
            <h4>{this.componentDidUpdate()}</h4>
            </div>
        )
    }
}
export default Update;