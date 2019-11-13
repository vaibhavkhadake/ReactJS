import React,{Component} from 'react' 

class LifeCycle2  extends Component{

    componentWillMount()
    {
        console.log("Welcome to component Will Mount method");
        
    }
    componentDidMount()
    {
        console.log("Welcome to component did mount");
    }

    componentWillReceiveProps(newProps) 
    {    
        console.log('Component Will receive props when changes occures')
     }

     shouldComponentUpdate(newProps, newState) 
     {
         //it check only condition true or false by default condition is true
        return true;
     }

     componentWillUpdate(nextProps, nextState) 
     {

        console.log('Component Will Update before render method');
     }

     componentDidUpdate(prevProps, prevState)
      {
        console.log('Component Did update after render method')
     }

     componentWillUnmount()
      {
        console.log('Component will unmount')
     }

    render()
    {
        console.log("Welcome to Render method");
   
        return(
            <div>
                 <h1>{this.props.myNumber}</h1>
            </div>
        )

    }
   
    

}
export default LifeCycle2