import React from "react"

export default function Result(props) {
    
    const {input, solutions} = props

    for(var i = 0; i < 10; i++){
        solutions[i] = solutions[i].toLowerCase()
    }

    return(
        <div>
            <h2>GOOD JOB</h2>
            <p>Your score was IMGAY/10!</p>
        </div>
    )
}