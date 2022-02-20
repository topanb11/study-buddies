import React, { useState } from "react"
import ProgressBar from "./ProgressBar"
import Result from "./Result"
import db from "./firebase"
import { useEffect } from "react"   
import { onSnapshot, collection } from "firebase/firestore"

export default function Game() {
    const [questions, setQuestions] = useState([]) 
    const [questionCount, setQuestionCount] = useState(0)
    const [score, setScore] = useState(0)
    const keyStroke = []
    const scuffedAnswers = []
    var i = 0
    var j = 0

    const mapQ = questions.map((questions) => questions.Question)
    const mapA = questions.map((questions) => questions.Answer.toLowerCase())

    useEffect(
        () => 
        onSnapshot(collection(db, "testQuestion"), (snapshot) => 
            setQuestions(snapshot.docs.map((doc) => doc.data()))
        ),
     []
    );
    
    function handleSubmit(event) {
        scuffedAnswers.push(keyStroke[i - 1])
        if(scuffedAnswers[j].toLowerCase() == mapA[j])
            increaseScore()
        setQuestionCount(count => count + 1)
        console.log(score)
        event.preventDefault()    
    }

    function handleChange(event) {
        keyStroke.push(event.target.value)
        i++
    }

    function increaseScore() {
        setScore(prevScore => prevScore + 1)
    }
    
    return(
        <div className="game">
            <ProgressBar correct={questionCount}/>
            {questionCount != 10 && <h3>Question {questionCount + 1}:</h3>}
            {questionCount != 10 && <p>{mapQ[questionCount]}</p>}
            {questionCount == 0 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 1 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 2 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 3 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 4 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 5 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 6 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 7 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 8 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 9 && 
                <form onSubmit={handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    placeholder="Enter your answer"
                    name="answer"
                    onChange={handleChange}
                >
                </input>
            </form>}

            {questionCount == 10 && 
                <div>
                    <h2>Good job!</h2>
                    <p>Your score is: {score}/10!</p>
                </div>    
            }

        </div>   
    )
}