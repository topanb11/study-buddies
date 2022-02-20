import React, { useState } from "react"
import Body from "./Body"
import ProgressBar from "./ProgressBar"



export default function Game() {

    const[question, setQuestion] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()
        setQuestion(prevQuestion => prevQuestion + 1)
    }


    return(
        <div className="game">
            <ProgressBar question={question}/>
            
            <h3>Question 1:</h3>
            <p>QUESTION QUESTION QUESTION QUESTION</p>

            <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input type="text"></input>
            </form>
        </div>
    )
}