import React from 'react'

function Column() {
    const person =["Harsh" ,"Kenil","Sagar"];
    return (
        < React.Fragment>
        {
            person.map((person,index) =>(
                    <React.Fragment key={index}>
                       <td>Sr.{index+1}{person}</td> 
                    </React.Fragment>
            )
            )
        }
          
        </React.Fragment>
    )
}

export default Column;