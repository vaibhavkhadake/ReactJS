import React, {Component} from 'react';
import './App.css';
import Fname from './Fname';
import Lname from './Lname';
import ExampleState from './ExampleState';
import Header from './Header';
import Content from './Content';
import ClickEvent from './ClickEvent';
import Details from './Details';
import Update from './Update'
import ClickEvent2 from './ClickEvent2'
//import MapFun from './MapFun'

class App extends Component {
   render() {
      return (
         <div>
             <h1>Main Component</h1>
             <Fname fname="mark"/>
             <Lname lname="Fernandis" city="Mumbai"/>
             <ExampleState />
            <Header/>
            <Content/>
            <ClickEvent/>
            <Details />
            <Update/>
            <ClickEvent2/>
            {/* <MapFun/> */}
         </div>
      );
   }
}




export default App;

