import './App.css';
import { useState } from "react";
import './components/Flashcard';
import FlashCard from './components/Flashcard';
import flashcards from "./card.js";
import GuessInput from './components/GuessInput.jsx';


function App(){

  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1
    );
    console.log("bye")
  };

  // Go to the previous card
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <h1>Common Japanese phrases</h1>
      <p>Some common Japanese phrases that maybe helpful!</p>
    
    <div>
      <h3>Number of cards: {flashcards.length}</h3>
    </div>

    <div className='card-container'>
      <FlashCard
        frontContent={<h2>{flashcards[currentIndex].frontContent}</h2>}
        backContent={<h2>{flashcards[currentIndex].backContent}</h2>}
      />
    </div>
    <GuessInput/>

      <button onClick={handlePrevious}>
        Previous
      </button>

      <button onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default App;
