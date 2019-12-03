import React, { Component } from "react";
import { getAllUser } from "../services/userServices";
import '../Components/css/Welcome.css';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };
  }
  handleLogout = () => {
    this.props.history.push("/");
  };
  componentDidMount() {
    getAllUser()
      .then(response => {
        console.log("response is in get all users  ", response.data);
        this.setState({users:response.data.result})
      })
      .catch(err => {
        console.log("Error in get all user method ", err);
      });
  }

  render() {
    const user = this.state.users;
    console.log(user);
    return (
      
      <div className="topContainerW">
      <div className="verifyButtonssW">
              
      <button className="verifyButtonW"onClick={this.handleLogout}>
      Logout
     </button>
    </div>
        <div className="mainContainerW">
          
            <label style={{fontSize:"30px"}}>
          User List
            </label>
          
            
          <h2>  {user.map((data,index) =>(
            <label key={index} style={{color:"black" ,fontFamily:"arial"}}>
            {data.firstName}<br/>
            </label>))}</h2>
            
        </div>
      </div>
    );
  }
}

export default Welcome;
