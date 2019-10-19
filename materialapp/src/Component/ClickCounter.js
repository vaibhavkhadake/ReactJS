import React ,{Component} from 'react'
import WithCounter from './WithCounter'
class ClickCounter extends Component
{
   
    render()
    {
        return(
            <div>
                <button onClick={this.props.incrementCounter}>{this.props.name} Clicked {this.props.count} Times</button>

            </div>
        )
    }

}
export default WithCounter(ClickCounter,5);