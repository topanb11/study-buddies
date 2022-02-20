import React, { useState } from "react"
import ProgressBar from "./ProgressBar"
import Result from "./Result"
import db from "./firebase"
import { useEffect } from "react"   
import { onSnapshot, collection } from "firebase/firestore"

export default function Game() {
    const [questions, setQuestions] = useState([])

    useEffect(
        () => 
        onSnapshot(collection(db, "testQuestion"), (snapshot) => 
            setQuestions(snapshot.docs.map((doc) => doc.data()))
        ),
     []
    );

    



    const[questionCount, setQuestionCount] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()
        setQuestionCount(prevQuestion => prevQuestion + 1)
        
    }

    return(
        <div className="game">
            <ProgressBar correct={questionCount}/>
            
        
            {questionCount != 10 && <h3>Question {questionCount + 1}:</h3>}
            {questionCount != 10 && <p>lool</p>}
            {questionCount != 10 && <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input type="text" placeholder="Enter your answer"></input>
            </form>}
            
            {questionCount == 10 && <Result />}

        </div>   
    )
}