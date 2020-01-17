import React,{ Component } from 'react';
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AddPerson from './AddPerson';
import List from './List';
class Dashboard extends Component{
    render()
    {
        return(
          <React.Fragment>
                <Container>
                    <Navbar style={{backgroundColor:"burlywood"}} >
                    <h1>To Do Application</h1>
                    </Navbar>
                    <AddPerson />
                    <List/>
                </Container>
            </React.Fragment>)
    
    }
}
 export default  Dashboard