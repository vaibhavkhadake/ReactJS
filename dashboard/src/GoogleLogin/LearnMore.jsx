import React,{Component} from 'react';
import Button from "@material-ui/core/Button";

class LearnMore extends Component
{
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    submitForm(event) {
        event.preventDefault();
        
        this.props.history.push('/GoogleLogin');

        }

    render()
    {
        return(
            <div >
                <h1>
                <center >Learn More</center>
                </h1>
                {/* <Button variant="text" color="primary" onClick={this.submitForm} > Back </Button> */}
            </div>
        )
    }

}
export default LearnMore