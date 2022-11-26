import React from 'react'
import {nanoid} from 'nanoid'
export default function Backend(){
   const [questions, setQuestions] = React.useState([])
   const [currid, setCurrid] = React.useState("")
   const [allIds, setAllIds] = React.useState(["op1", "op2", "op3", "op4"])
//    const [id1, setId1] = React.useState(false)
//    const [id2, setId2] = React.useState(false)
//    const [id3, setId3] = React.useState(false)
//    const [id4, setId4] = React.useState(false)
   
    const [options, setOptions] = React.useState([{
        isClickedThis:false,
    }])
  
   function holdOption(e){
        // allIds.map(ele=>{
        //     const currOp = document.getElementById(ele)
        //     if(currOp.id===e.target.id){
        //         currOp.style.backgroundColor = 'blue'
        //     }else{
        //         currOp.style.backgroundColor = 'white'
                
        //     }
        // })
        setCurrid(e.target.id)
        console.log(e.target)
        document.getElementById(e.target.id).style.backgroundColor = 'blue'
   }



    function addElements(arr){    
        const newArray = arr.map(ele =>{
           
        })
        const questions = arr.map(ele =>{
            return (
            <div className="questionsStack">
                <h3>{ele.question}</h3>
                {/* {console.log(ele.question)} */}
                <div className="options">
                    <button className="option1" onClick={holdOption} id = {nanoid()}>{ele.correct_answer}</button>
                    <button className="option2" onClick={holdOption} id = {nanoid()}>{ele.incorrect_answers[0]}</button>
                    <button className="option3" onClick={holdOption} id = {nanoid()}>{ele.incorrect_answers[1]}</button>
                    <button className="option4" onClick={holdOption} id = {nanoid()}>{ele.incorrect_answers[2]}</button>
                </div>
                <hr/>
            </div>
        )})
        setQuestions(questions)
    }
    

    

    React.useEffect(()=>{
        async function getQuestions(){
            const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
            const data = await res.json()
           addElements(data.results)
        //    console.log(data.results)
        }
         getQuestions();
    },[])
    
 
   

    return (
              
        <div className="questions">
            {questions}
            <div className="check">
                <button className="check-answers">Check Answers</button>
            </div>
            
        </div>
    )
}