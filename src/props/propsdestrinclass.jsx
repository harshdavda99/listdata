import { Component } from "react/cjs/react.production.min"

class Propsclasscomponentdst extends Component{
    render(){
        const {name,age}=this.props;
        return (
         <div>
           <h1><b>iib.) Example  using Class based component...</b></h1>
            <h3>...... My name is {name} <br/> .......I am {age} old...</h3>
            
           </div>
        )
    }
}   
export default Propsclasscomponentdst;