import React,{Component} from 'react';
class Update extends Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 'Initial data...'
       }
       this.updateState = this.updateState.bind(this);
    };
    updateState() {
       this.setState({data: 'Data Updated...'})
       
    }
    render() {
       return (
          <div>
             <button onClick = {this.updateState} > Click The Button </button>
             <h4>{this.state.data}</h4>
        
          </div>
       );
    }
 }
 export default Update;












