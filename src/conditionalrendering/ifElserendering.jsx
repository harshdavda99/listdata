import React, { Component } from 'react'

     class IfElserendering extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               isLoggedIn:false
          }
      }
                  
    render()
                    // 1st method simple if else stmt rendering
    {
       if (this.state.isLoggedIn){
           return <div>Log in successful</div>
       }else{
           return <div>Please log in first</div>
       }
    }

        
}

export default IfElserendering;
