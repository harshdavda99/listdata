import React from 'react'

function Person({persson}) {
    return (
        <div >
            <h2> I am {persson.name} and i am {persson.age} years old. i am professional {persson.skill}</h2>
        </div>
    )
}
export default Person