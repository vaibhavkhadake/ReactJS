import React ,{Component} from 'react'
import Calculator from './Calculator'

class TemperatureInput extends Component
{
render()
{
    return(

        <div>
            <Calculator scale={'c'}/>
            <Calculator scale={'f'}/>

        </div>
    )

}
    
}
export default TemperatureInput;