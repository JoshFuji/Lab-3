import { useState } from "react";
import "./Flashcard.css";
import React from "react";

const [userGuess, setUserGuess] = useState("");
const [feedback, setFeedback] = useState("");

function checkAnswer() {
    


  return (
    <div>
        <input type="text"/> 
        <button onClick={checkAnswer}>Guess</button>
    </div>
  )
}

export default GuessInput;