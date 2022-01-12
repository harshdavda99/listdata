import React, { Component } from 'react'

     class IfElserenderingbyjsvar extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               isLoggedIn:true
          }
      }
                  
    render()
                    // 2nd Method by using javascript variables for conditional rendering
                    {
                        let message;
                        if(this.state.isLoggedIn){
                            message = <div>Logged successful </div>
                        }else{
                            message=<div> Please Log in</div>
                        }
                        return <div>{message}</div>

    }

        
}

export default IfElserenderingbyjsvar;
