import React, { Component } from 'react'

const colorName = [
    {
    colorCode: "rgb(255, 255, 255)",
    colorName: "White"
    },
    {
    colorCode: "rgb(242, 139, 130)",
    colorName: "Red"
    },
    {
    colorCode: "rgb(215, 174, 251)",
    colorName: "Purple"
    },
    {
    colorCode: "rgb(255, 192, 203)",
    colorName: "Pink"
    },
    {
    colorCode: "rgb(167, 255, 235)",
    colorName: "Teal"
    },
    {
    colorCode: "rgb(251, 188, 4)",
    colorName: "Orange"
    },
    {
    colorCode: "rgb(174, 203, 250)",
    colorName: "Dark Blue"
    },
    {
    colorCode: "rgb(232, 234, 237)",
    colorName: "Gray"
    },
    {
    colorCode: "rgb(203, 240, 248)",
    colorName: "Blue"
    },
    {
    colorCode: "rgb(230, 201, 168)",
    colorName: "Brown"
    },
    {
    colorCode: "rgb(255, 255, 0)",
    colorName: "Yellow"
    },
    {
    colorCode: "rgb(204, 255, 144)",
    colorName: "Green"
    }
    ]

class ColorPalette extends Component{

    constructor()
    {
    super()
    this.state={
        open:false,
        anchorEl:null,
        cardName:'',
        color:'',
    }
    this.handlecolor=this.handlecolor.bind(this)
    }
    onOutsideclick()
    {
      this.setState({
        open: false
      })
    }
    editColor(event,note,key){
           
        
        var color=event.target.value;
       
        userctr.setColor(color,note,key)
}
handlecolor=event=>
{
   
    this.props.notetocolor(event.target.value)
}
handleClick=event=>{
    const { currentTarget } = event;
  this.setState(state => ({
    anchorEl: currentTarget,
    open: !this.state.open,
  }));
}

    render()
    {
        
        return(
            <div>


            </div>
        )
    }
}

export default ColorPalette