import React, { Component } from 'react'

export class Ternayconditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              isloggedIn:false
        }
    }
    
    render() {
        return (
            // this.state.isloggedIn && <div>Please log in</div>  //Base only for if condition
            this.state.isloggedIn ?  (<div>Logged in</div>):(<div>Please log in</div>) //based on if and else conditions
        )
    }
}

export default Ternayconditional

                