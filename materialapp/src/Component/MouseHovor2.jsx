import React, { Component } from 'react'

class MouseHover2 extends Component
{
    
    render()
    {
        return(
            <div>
                <h2 onMouseOver={this.props.incrementCount}> MouseHover {this.props.count} </h2>
            </div> 
        )
    }
}
export default MouseHover2