import React,{useState} from 'react'
import { Button,Row,Col,Form,Table } from 'react-bootstrap';
// import Todolist from './Todolist';

function Createlist() {

    
    const [taskInput,updateTaskInput]=useState("");
    const [todolist,setTodolist]=useState([]);   //todolist===disp===dates  just items 
    
    const [todips,setToDisp]=useState("");
    const [disp,Setdisp]=useState([]); //todolist===disp===dates  just items
    
    const [todate,setTodate]=useState("");
    const [dates,setdates]=useState([]); //todolist===disp===dates just items
    
    const [togglebtn,settogglebtn]=useState(true)  //for toogle button

    const [edititem,setedititem]=useState(null);    //for editing item
    const [read,setRead]=useState(false)
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
            alert("please add data")            //if no items added then alert
        }
        else if(taskInput &&  !togglebtn) {     //  if task input and toogle is false then set todolist
            setTodolist(
                todolist.map((elem,index)=>{
                    if( elem.id  === edititem){
                            return{...elem,             //previous item as it is
                                text:taskInput ,        //update title
                                dispss:todips,          //update Discription
                                datess:todate,          //update date
                            }
                        }
                        return elem;
                    })
            ) 
                updateTaskInput("");        //After Update set to empty
                setToDisp("");              //After Update set to empty
                setTodate("");              //After Update set to empty
              settogglebtn(true);           //setting toogle true for making add to list
                setedititem(null);          //setting edited item index null
            
        } else 
        {
            
        setTodolist([...todolist].concat(newtodo));    //adding value to the list
        updateTaskInput("");    //After submit set to empty 
      
        Setdisp([...disp].concat(newtodo));             //adding value to the list
        setToDisp("");          //After submit set to empty

        setdates([...dates].concat(newtodo))             //adding value to the list
        setTodate("");          //After submit set to empty
        }
    }
    const Delete=(index)=>{
        const deleted =[...todolist].filter((elem)=>{
            return index!== elem.id
        })
        setTodolist(deleted);   //item to be deleted
    }
   
   
    const settodoediting =(index)=>{
            const updated = [...todolist].find((ele)=>{
                return  ele.id===index;
            });

            settogglebtn(false);            
            updateTaskInput(updated.text);      //Title to be edited..
            setToDisp(updated.dispss);          //Discription to be edidted..
            setTodate(updated.datess);          //Date to be edited..
            setedititem(index);                 //item index for  editing 
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
                <div className=" text-center ">
                <Button type="button" className="mb-3 m-2 p-2 px-3" onClick={handleSubmit}  variant="primary">Add to list</Button>
                <Button as={Col} onClick={()=>setRead(true)} variant="success" className="mb-3 m-2 p-2 px-3"> Read List</Button></div>
                :
                <Button type="button"  onClick={handleSubmit}  variant="success">Update the value   </Button>
                }
            </Row>
            <Table striped bordered hover size="sm">
                     {read ?  <>
                             {todolist.map((data,index)=>{
                                 return(
                                       
                                     <React.Fragment key={index}>
                                  
                                       <thead>
                                          
                                         <tr>
                                             <th>Title</th>
                                             <th>Discp..</th>
                                             <th>Date And Time</th>
                                             <th className='d-flex text-center '> 
                                                <div className='container m-2' >Action</div>
                                                <div className='mx-3' >
                                                    <Button  onClick={()=>setRead(false)} variant="danger">x</Button>
                                                 </div>
                                            </th>
                                             
                                          </tr>
                                       
                                       </thead>
                                       <tbody>
                                         <tr>
                                        <td>{data.text}</td>
                                        <td>{data.dispss}</td>
                                        <td>{data.datess}</td>
                                        <td  className='d-flex container'>
                                        <Button as={Col} onClick={()=>settodoediting(data.id)} variant="primary">Update</Button>
                                        <Button as={Col} onClick={()=>Delete(data.id)} variant="danger">Delete</Button>
                                        </td>
                                        </tr>
                                        </tbody>
                                     </React.Fragment>
                                     )
                                    })}
                             
                             </> :null}
                        
                    </Table>   
        </div>
    )
}

export default Createlist
