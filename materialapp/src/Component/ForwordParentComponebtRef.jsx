import React, { Component } from 'react'
import ForwordRefComponent from './ForwordRefComponent'

class ForwordParentComponentRef extends Component{
    constructor(props)
    {
        super(props)
        this.inputRef=React.createRef()
    }
    clickHandler=()=>
    {
        this.inputRef.current.focus();
    }
    render()
    {
        return(
            <div>
                <ForwordRefComponent ref={this.inputRef}/>
                <button onClick={this.clickHandler}> Focus Input </button>
            </div>
        )
    }

}
export default ForwordParentComponentRef;