import React, { useState } from "react"
import ProgressBar from "./ProgressBar"
import Result from "./Result"
<<<<<<< HEAD
import db from "./firebase"
import { useEffect } from "react"   
import { onSnapshot, collection } from "firebase/firestore"
=======
>>>>>>> 8653482a54854094f5f7c49ef972c41e27d646f0

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
        alert("im gay")
        event.preventDefault() 
        setQuestionCount(prevQuestion => prevQuestion + 1)
    }

    return(
        <div className="game">
            <ProgressBar correct={questionCount}/>
            
        
            {questionCount != 10 && <h3>Question {questionCount + 1}:</h3>}
            {questionCount != 10 && <p></p>}
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