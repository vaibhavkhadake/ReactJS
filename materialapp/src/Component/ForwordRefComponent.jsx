import React from 'react'

const ForwordRefComponent= React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>

        </div>
    )
})


export default ForwordRefComponent;