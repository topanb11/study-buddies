import React from "react"
import { useState } from "react"
import Game from "./Game"

export default function Body() {

    const[game, setGame] = useState(false)

    function displayGame() {
       setGame(prevGame => !prevGame)

    }

    return(
        <div className="body--main">
            <div className="body--content">

                {!game && <h2>Welcome to studyBuddies!</h2>}
                {!game && <p>App description jajajaj play our flashcard game</p>}
                {game && <Game />}

                <button 
                    className="body--play"
                    onClick={displayGame}
                >
                    {game? "Reset" : "Play"}
                </button>
            </div>
        </div>
    )
}