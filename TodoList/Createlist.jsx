import React,{useState} from 'react'
import { Button,Row,Col,Form,Table } from 'react-bootstrap';
// import Todolist from './Todolist';

function Createlist() {

    
    const [todolist,setTodolist]=useState([]);
    const [taskInput,updateTaskInput]=useState("");
    
    const [disp,Setdisp]=useState([]);
    const [todips,setToDisp]=useState("");
    
    const [dates,setdates]=useState([]);
    const [todate,setTodate]=useState("");
    
    const [togglebtn,settogglebtn]=useState(true)
    const [edititem,setedititem]=useState(null);
    
    function handleSubmit(e){
      
    
    
        e.preventDefault()
        // console.log(e)
        const newtodo={
            id:new Date().getTime(),
            text:taskInput ,
            dispss:todips,
            datess:todate,
        }
        if(taskInput === "" || todips==="" || todate==="" ){
            alert("please add data") 
        }
        else if(taskInput &&  !togglebtn) {
            setTodolist(
                todolist.map((elem,index)=>{
                    if( elem.id  === edititem){
                            console.log(elem.id );
                            console.log(edititem)
                            return{...elem,
                                text:taskInput ,
                                dispss:todips,
                                datess:todate,
                            }
                        }
                        console.log();
                        return elem;
                    })
            ) 
                updateTaskInput("");
                setToDisp("");
                setTodate("");
              settogglebtn(true);
                setedititem(null); 
            
        } else 
        {
            
        setTodolist([...todolist].concat(newtodo));
        updateTaskInput("")
      
        Setdisp([...disp].concat(newtodo));
        setToDisp("");

        setdates([...dates].concat(newtodo))
        setTodate("")
        }
    }
    const Delete=(index)=>{
        const deleted =[...todolist].filter((elem)=>{
            return index!== elem.id
        })
        setTodolist(deleted);
    }
    const settodoediting =(index)=>{
            const updated = [...todolist].find((ele)=>{
                return  ele.id===index;
            });
            console.log(updated ); 
            settogglebtn(false);

            console.log(updated.text)
            
            updateTaskInput(updated.text);
            setToDisp(updated.dispss);
            setTodate(updated.datess);
            setedititem(index);  
    }
 
    return (
        <div className='App ' >
          <Form >
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               
                 <Form.Label>Title</Form.Label>
                 <Form.Control onChange={(e)=>updateTaskInput(e.target.value) } 
                 type="textarea" placeholder="Enter Title" value={taskInput} />

                 <Form.Label>Discription</Form.Label>
                 <Form.Control onChange={(e)=>setToDisp(e.target.value)} as="textarea" rows={3} value={todips} />
            
                <Form.Label>Time and Date</Form.Label>
                <Form.Control onChange={(e)=>setTodate(e.target.value)} value={todate} type="datetime-local"  placeholder="Choose date" />    
        
            </Form.Group>
            </Form>
            <Row className="mx-0">
             {  togglebtn ? 
                <Button type="button"  onClick={handleSubmit}  variant="primary">Add to list</Button>
                :
                <Button type="button"  onClick={handleSubmit}  variant="success">Update the value   </Button>
                }
            </Row>
            <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Discp..</th>
                                <th>Date And Time</th>
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
                                        <Button as={Col} onClick={()=>settodoediting(data.id)} variant="primary">Update</Button>
                                        <Button as={Col} onClick={()=>Delete(data.id)} variant="danger">X</Button>
                                        </td>
                                        </tr>
                                     </React.Fragment>
                                     )
                                    })}
                             
                         </tbody>
                    </Table>   
        </div>
    )
}

export default Createlist
