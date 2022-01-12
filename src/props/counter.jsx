import { Component } from "react/cjs/react.production.min"

class CounterComponent extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    // updating state with call back function and without previous state
    // here value is called 4 times but  state will be same every time.
    IncrementCount(){
    this.setState({
        count:this.state.count+1
    },()=>console.log("Call back value :" ,this.state.count))
    }

    incremet(){
        this.IncrementCount();
        this.IncrementCount();
        this.IncrementCount();
        this.IncrementCount();
    }


    // updating state with call back function and with previous state
    // here value is called 4 times so state will be update 4 times
    incrementspreviousstate(){
        this.setState((prevState)=>({
            count:prevState.count+1 
        }))
        }

    incremetPreviousstate(){
        this.incrementspreviousstate();
        this.incrementspreviousstate();
        this.incrementspreviousstate();
        this.incrementspreviousstate();
        this.incrementspreviousstate();
    }

    render(){
        return (
         <div>
             <h1>iv.) This is the example for the counter and changeing state.</h1>
             <h1>Here there also call back method</h1>
            <h3> counter increment:<span className="headingcolor" >{this.state.count}</span><br></br>
             <button onClick={()=>this.IncrementCount()}>Increment with call back</button>
             <button onClick={()=>this.incremet()}>Increment based on without Pre_State  </button>
             <button onClick={()=>this.incremetPreviousstate()}>Increment based on with Pre_State</button></h3>
             <hr></hr>
           </div>
        )
    }
}   
export default CounterComponent;