import React from 'react'
import { Button,Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
function Todolist() {   

  return (<React.Fragment>
        <div className='container-fluid'  >
             <div className='btn container ' >
                    <p>To Create list Click on Create button and for reading list click on Read button given below...</p>
                    <Button as={Col} variant="success"><NavLink className="textdec" to="/create">Create List</NavLink></Button>
                    {/* <Button as={Col} variant="primary" className="mx-2"> <NavLink  className="textdec" to ="/read" > Read List</NavLink> </Button> */}
             </div>             
        </div>
    </React.Fragment>
    )
}

export default Todolist
