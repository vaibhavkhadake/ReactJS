import React ,{Component} from 'react'
import WithCounter from './WithCounter'
class MouseHover extends Component
{
    render()
    {
        return(
            <div>
                <h2 onMouseOver={this.props.incrementCounter}>  Hover {this.props.count} Times</h2>

            </div>
        )
    }

}
export default WithCounter(MouseHover,5);