import React ,{Component} from 'react'
import Boiling from './Boiling'


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
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
        const scale = this.props.scale;
        return(
           
                <React.Fragment>
                <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}</legend>
                <input  value={this.state.temperature} onChange={this.handleEvent}/>

                <Boiling celcious={parseFloat(this.state.temperature)}/>
                </fieldset>
                </React.Fragment>
            

        );
    }
}
export default Calculator;