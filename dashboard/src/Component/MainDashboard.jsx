import React, { Component } from 'react'
import Dashboard from './Dashboard'

class MainDashboard extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
    render()
    {
        return(

            <div>
                    <Dashboard props={this.props}></Dashboard>

            </div>
        )
    }
}
export default MainDashboard