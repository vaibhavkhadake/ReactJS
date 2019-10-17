import React  from 'react';
function ListDemo(props) 
{ 
    const list = props.menuitems; 
  
    const updatedList = list.map((listItems,index)=>{ 
        return <li key={index}>  {listItems}</li>; 
    }); 
  
    return( <div>
        <h2>List</h2>
        <ul>{updatedList}</ul> 
        </div>
    ); 
} 
export default ListDemo;