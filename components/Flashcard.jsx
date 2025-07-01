import React from "react";
import "./Flashcard.css";

/* 💡  This component is now “dumb”: it just renders what it is told */
export default function FlashCard({ frontContent, backContent, flipped, onFlip }) {
  return (
    <div
      id="flipCard"
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={onFlip}                 /* parent toggles the state */
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
}
