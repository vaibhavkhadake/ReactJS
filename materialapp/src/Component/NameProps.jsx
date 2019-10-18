import React from 'react'

const NameProps=(props)=>
{
    return(

        <React.Fragment>
            <h2>Hello , {props.name} </h2>
            <h2>Welcome in {props.city}</h2>
            {props.children}
            <hr/>

        </React.Fragment>
    )

}

export default NameProps; 