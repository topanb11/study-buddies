import React, { useState } from "react"
import ProgressBar from "./ProgressBar"
import Result from "./Result"
import Question from "./Question"
import db from "./firebase"
import { useEffect } from "react"   
import { onSnapshot, collection } from "firebase/firestore"

export default function Game() {
    const [questions, setQuestions] = useState([]) 
    const [questionCount, setQuestionCount] = useState(0)
    const mapQ = questions.map((questions) => questions.Question)


    useEffect(
        () => 
        onSnapshot(collection(db, "testQuestion"), (snapshot) => 
            setQuestions(snapshot.docs.map((doc) => doc.data()))
        ),
     []
    );

    
    function handleSubmit(event) {
        event.preventDefault() 
        setQuestionCount(count => count + 1)
    }
    

    return(
        <div className="game">
            <ProgressBar correct={questionCount}/>
            {questionCount != 10 && <h3>Question {questionCount + 1}:</h3>}
            {questionCount != 10 && <p>{mapQ[questionCount]}</p>}
            {questionCount != 10 && 
            <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                >
                </input>
            </form>}
            
            {questionCount == 10 && <Result />}

        </div>   
    )
}