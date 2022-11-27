import React from 'react'
import {nanoid} from 'nanoid'
export default function Backend(){
    const [questions, setQuestions] = React.useState([])
    const [ansData, setAnsData] = React.useState([""])


    function addElements(arr){   
        function holdOption(){
                    
        } 
   
        const questions = arr.map(ele =>{
            let a = nanoid()
            let b = nanoid()
            let c = nanoid()
            let d = nanoid()
            
            return (
            <div className="questionsStack">
                <h3>{ele.question}</h3>
                {/* {console.log(ele.question)} */}
             
                <div >
                    <form className="options">
                        <input
                            type="radio"
                            
                            id={a}
                            name = "answers"
                            value="optn1"
                            // className="option"
                        />
                        <label htmlFor={a} id={a}><div className='label'>{ele.correct_answer}</div></label>

                        <input
                        // className="option"
                            type="radio"
                            id={b}
                            name = "answers"
                            value="optn2"
                        />
                        <label htmlFor={b} id={b}><div className = "label">{ele.incorrect_answers[0]}</div></label>

                        <input
                        // className="option"
                            type="radio"
                            id={c}
                            name = "answers"
                            value="optn3"
                        />
                        <label htmlFor={c} id={c}><div className = "label">{ele.incorrect_answers[1]}</div></label>

                        <input
                        // className="option"
                            type="radio"
                            id={d}
                            name = "answers"
                            value="optn4"
                        />
                        <label htmlFor={d} id={d}><div className = "label">{ele.incorrect_answers[2]}</div></label>
                    </form>
                
                </div>
    
               
                  {/* <div className="options">
                    <button className="option1" onClick={holdOption} id = {a}>{ele.correct_answer}</button>
                    <button className="option2" onClick={holdOption} id = {b}>{ele.incorrect_answers[0]}</button>
                    <button className="option3" onClick={holdOption} id = {c}>{ele.incorrect_answers[1]}</button>
                    <button className="option4" onClick={holdOption} id = {d}>{ele.incorrect_answers[2]}</button>
                </div> */}
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