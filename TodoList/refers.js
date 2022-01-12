import React,{useState} from 'react'
import {Form,Button,Row} from 'react-bootstrap';

function FormOne() {

    const [data, setData] = useState({id: new Date().getTime().toString(),title:'',description:'',date:''})
    const [items, setItems] = useState([])
    const [idOne, setIdOne] = useState(null)
    const [toggle,setToggle] =useState (true)
    const onSubmitClick = (e) => {
      
        if(data.title === "" && data.description === "" && data.date === ""){
            alert("please add data")
            
        }
        else if (data && !toggle){
            setItems(items.map((i) => {
                if (i.id === idOne){
                    return {...i,title:data.title,description:data.description,date:data.date}
                }
                return i
                
            }))
            setData({id: new Date().getTime().toString(),title:'',description:'',date:''})
              setIdOne(null)
        setToggle(true) 
        }
        else{
            setItems([...items,data])
        setData({id: new Date().getTime().toString(),title:'',description:'',date:''})
        }
        e.preventDefault();
    
    }
    const deleteItems = (index) => {
          console.log("id ==>",index)
          const updatedItems = items.filter((elem) => {
              return index != elem.id
          })
          setItems(updatedItems)
    }
    const editItem = (index) => {
        console.log("index ==>",index)
        const update =  items.find((i) => {
            return i.id === index
        })
        setToggle
        setData(update)
        setIdOne(index)
        setToggle(false)
    }



    return (
    <div className='container'>
      <Row >
        <div className='col-sm-6'>
        
           <h1>Form</h1>
          {/* <Form.Group className="mb-3">
             <Form.Label>id</Form.Label>
             <Form.Control type="number" value={data.id} onChange={(e) => idChange(e)} className="form-control" placeholder="Enter id"/>
          </Form.Group> */}
          <Form.Group className="mb-3">
             <Form.Label>title</Form.Label>
             <Form.Control type="text" value={data.title}  onChange={(e) => setData({...data,title:e.target.value})} className="form-control" placeholder="Enter title"/>
          </Form.Group>
          <Form.Group className="mb-3">
             <Form.Label>description</Form.Label>
             <Form.Control className="form-control" value={data.description} onChange={(e) => setData({...data,description:e.target.value})}   placeholder="enter description" rows="3"/>
          </Form.Group>
          <Form.Group>
             <Form.Label>Date and time</Form.Label>
             <Form.Control type="datetime-local" value={data.date} onChange={(e) => setData({...data,date:e.target.value})}  className="form-control" placeholder="Choose date"/>
          </Form.Group>
          {toggle ? <Button onClick={onSubmitClick} Varaint="dark">Submit</Button> : <Button onClick={onSubmitClick} Varaint="dark">Update</Button> } 
        
        </div>
        <div className="col-sm-6">
          <h1>Data Entry</h1>
        <table className="table">
        <thead>
            <tr>
           
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            
           {
            items.map((e) => {
                console.log("items==>",items)
                return(
                 <tr key={e.id}>
                      <td>{e.title}</td>
            <td>{e.description}</td>
            <td>{e.date}</td>
            <td>
             <Button onClick={() => deleteItems(e.id)}  Varaint="dark">delete</Button>
             <Button onClick={() => editItem(e.id)}>edit</Button></td>
                 </tr>      
                )
            })}
           
            
        </tbody>
        </table>
        </div>

      </Row>
    
    </div>
    )
}

export default FormOne
