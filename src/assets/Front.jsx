import React from 'react'

export default function Front(prop){ 
    return (
        <div >    
                <div className="quiz-start">
                    <h1> Quizzical </h1>
                    <button onClick={prop.toggleStart}>Start</button>
                </div>
        </div>
        
    )
}