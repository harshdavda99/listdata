import React from 'react'
// import {NavLink} from 'react-router-dom'
import { Button,Col,Table } from 'react-bootstrap';
function ReadList({todolist}) {

    // const [text,dispss,datess]=props.data;
    return (
         
                     <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                             <th>Title</th>
                            <th>Description</th>
                            <th>Date and Time</th>
                            <th className='text-center  '>Action</th>
                          </tr>   
                         </thead>
                
                         <tbody>
                         {todolist.map((data,index)=>{
                                 return(
                                    
                                     <React.Fragment key={index}>
                                         <tr>

                                        <td>{data.text}</td>
                                        <td>{data.dispss}</td>
                                        <td>{data.datess}</td>
                                        <td  className='d-flex container'>
                                        <Button as={Col} variant="primary">Update</Button>
                                        <Button as={Col} variant="danger">X</Button>
                                        </td>
                                         </tr>
                                        
                                     </React.Fragment>
                                     
                                     )
                             })}
                         </tbody>
                    </Table>    
            
        )
}

export default ReadList
