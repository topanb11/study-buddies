import React from "react"

export default function ProgressBar(props) {

    let {correct} = props
    
    return(
        <div>
            <h3>Progress: {correct}/10</h3>
        </div>
    )

}