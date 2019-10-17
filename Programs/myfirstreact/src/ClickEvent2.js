import React , {Component} from 'react';

class ClickEvent2 extends Component
{
    constructor(props)
    {
        super(props)
        this.click=this.click.bind(this);
    }
    click()
    {
        console.log("Clicked");
    }
    render()
    {
        return(
            <div>
                <h5>Clicked Event</h5>
                <button onClick={this.click}>ClickEvent2</button>

            </div>


        )
    }

}
export default ClickEvent2;