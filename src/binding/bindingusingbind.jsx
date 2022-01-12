import { Component } from "react/cjs/react.production.min"

class BindingByBind extends Component{
    constructor(){
        super()
        this.state={
            message:" Welcome visitor"
        }
    }
    changemessage(){
        this.setState({
            message:"Thank you visit again.."
        })
    }
    render(){
        return (
            <div><h1>ii) Example using Class based component <br></br>  for binding using <span className="headingcolor">dot bind function i.e  .bind() </span> to change state</h1>
            <h4>Here <span className="headingcolor">Welcome visitor</span> will be changed to <span className="headingcolor">Thank you visit again..</span><br/>Onclick</h4>
            <h3>{this.state.message}</h3>
            <button onClick={this.changemessage.bind(this)} >Change the status</button>
        </div>
        )
    }
}
export default BindingByBind;