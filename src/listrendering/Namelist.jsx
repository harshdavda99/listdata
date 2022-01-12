import React from 'react'
import Person from './Person'; 

function Namelist() {
    
    const person =[
        {   
            id:1,
            name:"Harsh",
            age:25,
            skill:"Js developer"
        },
        {   
            id:2,
            name:"Sagar",
            age:22,
            skill:"Js developer"
        },
        { 
            id:3,
            name:"Kenil",
            age:23,
            skill:"Js developer"
        }
    ];
    // const personlist= person.map(persson=>)
    return <div>
             {person.map((persson,index)=> <h1 key={index}> 
                                                         <Person persson={persson} /></h1>)}
        </div>
}
export default Namelist
