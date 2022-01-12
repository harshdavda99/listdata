import { Component } from "react/cjs/react.production.min"

class Propsclasscomponent extends Component{
    render(){
        return (
         <div>
           <h1><b>ii.) Example  using Class based component...</b></h1>
            <h3>...... My name is {this.props.name} <br/> .......I am {this.props.age} old...</h3>
            
           </div>
        )
    }
}   
export default Propsclasscomponent;