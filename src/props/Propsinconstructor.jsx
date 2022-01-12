import { Component } from "react/cjs/react.production.min"

class Propsinconstructor extends Component{
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
            <div><h1>iii.) Example using Class based constructor <br></br> component for changing state</h1>
                <h4>Here <span className="headingcolor">Welcome visitor</span> will be changed to <span className="headingcolor">Thank you visit again..</span><br/>Onclick</h4>
                <h3>{this.state.message}</h3>
                <button onClick={()=>this.changemessage()} >Change the status</button>
            </div>
        )
    }
}
export default Propsinconstructor;