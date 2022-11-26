import React from 'react'
import Front from './assets/Front'
import Backend from './assets/Backend'

export default function App(){
  const [show, setShow] = React.useState(true)
  function toggleStart(){
    setShow(curr=>!curr)
  } 
  return (
      <div className="quiz-comp">

        {show && <Front toggleStart={toggleStart}/>}
        {!show && <Backend/>}
      </div>
  )
}