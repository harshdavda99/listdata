import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef =React.createRef()
     }
  componentDidMount(){
      this.inputRef.current.focus()
      console.log(this.inputRef)
  }   
  handleEvent = () =>{
      alert(this.inputRef.current.value)        
  }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} ></input>
                <button type='button ' onClick={this.handleEvent}  >Click Here to alert </button>
            </div>
        )
    }
}

export default RefsDemo
