import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import "./Demo.css"
class Demo extends Component
{
render()
{
    return(
        <div>
            <h1>Demo of flex tag</h1>
            <div className="mainContainer">
                    <div className="subContainer1">
                        <div className="ename22">
                            <div className="fname22">
                                <TextField 
                                label="firstname"
                                name="fname"
                                margin="dense"
                                rowsMax="5px"
                                />
                            </div>
                            <div className="lname22">
                            <TextField 
                                label="lastname"
                                name="lname"
                                margin="dense"
                                rowsMax="5px"
                                />
                            </div>
                        </div>

                        <div className="mnumber22">
                        <TextField 
                                label="mobilenumber"
                                name="mnumber"
                                margin="dense"
                                rowsMax="5px"
                                />
                            </div>

                         <div className="pass22">
                             <div className="password22">
                             <TextField 
                                label="password"
                                name="password"
                                margin="dense"
                                rowsMax="5px"
                                />
                             </div>
                             <div className="repassword22">
                             <TextField 
                                label="repassword"
                                name="repassword"
                                margin="dense"
                                rowsMax="5px"
                                />
                             </div>
                            </div>
                            
                        </div>
                        <div className="subContainer2">

                    </div>


                    </div>

                    

            </div>
       
    )
}
}
export default Demo