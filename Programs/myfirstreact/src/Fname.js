import React,{Component} from 'react';
class Fname extends Component
{
    
constructor(props)
{
    super(props)

    this.state={

        First:this.props.fname
    }

}
    
    render()
    {
        return(
            <div>
            <h3>First Name : {this.state.First}</h3>

            
            </div>
        );
    }
}


export default Fname;