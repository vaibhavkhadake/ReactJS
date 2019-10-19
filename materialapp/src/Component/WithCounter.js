import React ,{Component} from 'react'


const UpdatedComponent=(OriginalComponent,numberParameter)=>{

class WithCounter extends Component
{
    constructor(props)
    {
        super(props)

        this.state=(
            {
                count:0
            }
        )
    }
    incrementCounter=()=>
    {
        this.setState( preState =>
            {
               return {count:preState.count+numberParameter}
            }
        )
        
    }

    render()
    {
        return(
            <div>
                <OriginalComponent
                     count={this.state.count} 
                     incrementCounter={this.incrementCounter}
                     {...this.props}
                />


            </div>
        )
    }
}
return WithCounter
}
export default UpdatedComponent;