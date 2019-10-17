import React ,{Component} from 'react'
import Boiling from './Boiling'

class Calculator extends Component
{
    constructor(props)
    {
        super(props)
        this.state=({
            temperature:''
        })
    }

    handleEvent =(event)=>{
        this.setState({
            temperature: event.target.value
        })
    }
    render()
    {
        return(
            <div> 
                <fieldset>
                <legend>Enter Temperature in Celcious : </legend>
                <input  value={this.state.temperature} onChange={this.handleEvent}/>

                <Boiling celcious={parseFloat(this.state.temperature)}/>
                </fieldset>
            </div>

        );
    }
}
export default Calculator;