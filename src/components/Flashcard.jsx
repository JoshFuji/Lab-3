import { useState } from "react";
import "./Flashcard.css";
import React from "react";
import flashcards from "../card.js";

function FlashCard({frontContent, backContent}) {
  const [flipped, setFlipped] = useState(false);

  const FlipCard = () => {
    setFlipped(!flipped)
  }


  return (
     <div
      id="flipCard" 
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front" onClick={FlipCard}>
          {frontContent}
        </div>
        <div className="flip-card-back" onClick={FlipCard}>
          {backContent}
        </div>
      </div>
    </div>
  )
}

export default FlashCard;