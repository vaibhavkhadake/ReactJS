import React, { Component } from 'react'
import { connect } from "react-redux";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

class List extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            person:[]
        }
    }
 
   handleClose=async(name)=>{
    
     this.props.personStatus.splice(name,1);
   
  // let data=this.props.personStatus.filter((name2)=>name!==(name2.personName)
  // )
  // console.log("data",data)
 await this.setState({person:this.props.personStatus})
  console.log("this.state.person",this.state.person)
 
   }
 
    render()
    {
         console.log("redux in render list component",this.props.personStatus);
    
        return(
           <React.Fragment>{this.props.personStatus.length !==0 ? <h2>Person List</h2>:null}                                                                                                                                
           <h4>{this.props.personStatus.map((data,index)=><div style={{display:'flex',justifyContent:'space-around'}} key={index}> {data.personName} <CloseRoundedIcon onClick={()=>this.handleClose(data.personName)}/> </div>)}</h4> 
           </React.Fragment>
        )
    }

}
// export default List;

const mapStateToProps = state => {
    return {
      personStatus: state.personData,
    };
  };
  
  
  export default connect(mapStateToProps)( List);