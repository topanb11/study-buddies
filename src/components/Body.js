import React from "react"
import { useState } from "react"
import Game from "./Game"

export default function Body(props) {

    const[game, setGame] = useState(false)

    function displayGame() {
       setGame(prevGame => !prevGame)
    }

    return(
        <div className="body--main">
            <div className="body--content">

                {!game && <h2>Welcome to studyBuddies!</h2>}
                {!game && <p>Click play to start!</p>}
                {game && <Game />}

                <button 
                    className="body--play"
                    onClick={displayGame}
                >
                    {!game && <img src="./assets/button-icon.png"/>}
                    {game? "Reset" : "Play"}
                </button>
            </div>
        </div>
    )
}