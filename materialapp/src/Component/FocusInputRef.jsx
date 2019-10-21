import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInputRef extends Component
{
    constructor(props)
    {
        super(props)
        this.componentRef=React.createRef()

    }
    clickHandlar=()=>{
        this.componentRef.current.focusEvent();
    }
render()
{
    return(
        <div>
            <InputRef ref={this.componentRef}/>
            <button onClick={this.clickHandlar}> Focus </button>


        </div>
    )
}
}
export default FocusInputRef;