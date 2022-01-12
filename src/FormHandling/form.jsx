import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comment:"",
             topic:""
        }
    }
    changeHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    commenthandler=(event)=>{
        this.setState({
            comment:event.target.value
        });
    }
    handletopic=(event)=>{
        console.log(event.target.value)
        this.setState({
            topic:event.target.value
        })
    }    
    handleSubmit= event=>{
        alert(`${this.state.username} ${this.state.comment}${this.state.topic}`)
        // event.preventDefault(); //   for not  refreshing the form date....
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label>UserName:</label>
                        <input type="text" value={this.state.username} onChange={this.changeHandler} ></input>
                    </div>
                    <div>
                        <label>TextArea:</label>
                     <textarea value={this.state.comment} onChange={this.commenthandler} ></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                           <select value={this.state.topic } onChange={this.handletopic} >
                              <option value="React"> ReactJs</option>
                              <option value="Vue">VueJs</option>
                              <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit"  >Submit</button>
                </form>
                
            </div>
        ) 
    }
}

export default Form
