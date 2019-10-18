import React, { Component } from 'react'
import NameProps from './NameProps';
import StateClass from './StateClass';
import StateWithoutConstructor from './StateWithoutConstructor';

class NameClassProps extends Component
{
    render()
    {

        return(

            <React.Fragment>
            <NameProps name="Vaibhav" city="Kolhapur"> <p> Children Props </p> </NameProps>
            <NameProps name="Mark" city="Mumbai"/>
            <h2>Props in class Component Name= {this.props.name} </h2>
            <hr/>
            
            <StateClass nmessage="Hello"/>

            <h4>Another Component</h4>
            <StateWithoutConstructor mm="Vk"/>
            </React.Fragment>

        )
    }
  
}
export default NameClassProps;