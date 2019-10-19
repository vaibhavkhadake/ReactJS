import React, { Component } from "react";



class StateClass extends Component
{
    constructor(props)
    {
        super(props)
         this.state=({
             message: 'Welcome in class component',
             newmessaage: this.props.nmessage
         })
    }
    
    render()
    {
        return(
            <div>

                 <h2>Welcome in class state component</h2>
                 <h4>Using State :{this.state.message}<br/></h4>

                 <h4> Using Props : {this.state.newmessaage}</h4>
                 <hr/>

              

            </div>
           
        )
    }

}

export default StateClass;