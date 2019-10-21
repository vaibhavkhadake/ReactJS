import React, { Component } from 'react'

class Ref extends Component{
constructor(props)
{
    super(props)
    this.inputRef=React.createRef();
    this.cbRef=null;
    this.setCbRef=(element)=>{
        this.cbRef=element
    }
}
componentDidMount()
{
    //With create Ref method
    // this.inputRef.current.focus();
    // console.log(this.inputRef)

    if(this.cbRef)
    {
        this.cbRef.focus();
    }
}
clickEvent=()=>{
    return alert(this.inputRef.current.value)
}
render()
{
    return(
            <div style={{backgroundColor:'skyblue'}}>
            <input type="text" style={{ color:'brown'}} ref={this.inputRef} /><br/>
            <input type="text"  ref={this.setCbRef} /><br/>
            <button onClick={this.clickEvent} > Click Here </button>
            </div>
    )
}
}
export default Ref;