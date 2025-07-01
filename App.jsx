import "./App.css";
import { useState } from "react";
import FlashCard from "./components/Flashcard";
import flashcards from "./card.js";
import GuessInput from "./components/GuessInput.jsx";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  /* ---------- guess checker ---------- */
  const handleGuess = (guess) => {
    const answer  = flashcards[currentIndex].backContent;
    const correct = guess.trim().toLowerCase() === answer.toLowerCase();

    if (correct) {
      setScore((s) => s + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Nope. Correct answer: ${answer}`);
    }
    setFlipped(true);      // reveal the card
  };

  /* ---------- navigation ---------- */
  const handleNext = () => {
    setCurrentIndex((i) => (i === flashcards.length - 1 ? 0 : i + 1));
    setFlipped(false);
    setFeedback("");
  };

  const handlePrevious = () => {
    setCurrentIndex((i) => (i === 0 ? flashcards.length - 1 : i - 1));
    setFlipped(false);
    setFeedback("");
  };

  /* ---------- render ---------- */
  return (
    <div className="App">
      <h1>Common Japanese phrases</h1>
      <p>Some common Japanese phrases that may be helpful!</p>

      <h3>Number of cards: {flashcards.length}</h3>

      <div className="card-container">
        <FlashCard
          frontContent={<h2>{flashcards[currentIndex].frontContent}</h2>}
          backContent={<h2>{flashcards[currentIndex].backContent}</h2>}
          flipped={flipped}
          onFlip={() => setFlipped((f) => !f)}
        />
      </div>

      <GuessInput onGuess={handleGuess} />
      <p className="mt-2">{feedback}</p>
      <p className="text-sm text-gray-600">
        Score: {score} / {flashcards.length}
      </p>

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
