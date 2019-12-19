import React,{Component} from 'react' 
import LifeCycle2 from './LifeCycle2'

class LifeCycle  extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            number:0
        }
    }

    updateNumber=()=>
    {
        this.setState({
            number:this.state.number + 2
        })
    }

    render()
    {
   
        return(
            <div>
                 <button onClick = {this.updateNumber}>Click </button>
                 <LifeCycle2 myNumber = {this.state.number} />
            </div>
        )

        }
}
export default LifeCycle