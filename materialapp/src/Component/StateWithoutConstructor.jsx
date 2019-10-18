import React, { Component } from 'react'

class StateWithoutConstructor extends Component
{
    state=({
        mess:'Without Constructor',
        mess2 : this.props.mm
    })

    render()
    {
        return(
            <div>
                <h4>    Message : {this.state.mess} </h4>
                <h4>    Message2 : {this.state.mess2} </h4>
            </div>
        )
    }
}
export default StateWithoutConstructor;