import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { card } from "./Redux/Actions";
class AddPerson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personName: '',
      array: [],
    }
  }

  handleChangeName = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  handleSubmit = (event) => {
    let data = {
      personName: this.state.personName,
    }
    
if(this.state.personName.length !==0)
{
  this.state.array.push(data)
  // this.setState({ person: this.props.personStatus });
  // this.props.card(this.state.array);
  console.log("Person added successfully ", this.state.personName)
  console.log("Person list in array  ", this.state.array)
  this.setState({ array: [] })
  this.props.card(this.state.array);
  event.preventDefault();
  this.setState({ personName: '' })
}
  }
 

  render() {
    // const personInfo = this.state.array;
    return (
      <React.Fragment >
        <h2>Add a new Person </h2>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',margin: '0% 30% '}}>
          <TextField
            type="text"
            label="Add Person"
            name="personName"
            value={this.state.personName}
            onChange={this.handleChangeName}
            margin="normal"
            variant="outlined"
            required
          />
          
          <Button variant="contained" color="primary" onClick={this.handleSubmit}>Add Person</Button>
        </div>
        {/* <div>
          {personInfo.map((data, index) => <div key={index}>{data}{index}</div>)}
       </div> */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    personStatus: state.personData,
  };
};
const mapDispatchToProps = {
  card
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson)

