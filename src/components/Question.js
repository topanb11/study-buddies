import React from "react"

export default function Question(props) {
    const {questions, questionNum} = props
    
    return questions.map((question) => <li>{questions}</li>)
}