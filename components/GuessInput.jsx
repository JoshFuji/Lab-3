import { useState } from "react";
import React from "react";
   

export default function GuessInput({ onGuess }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;      
    onGuess(value.trim());
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input flex gap-2 mt-4">
      <label className="flex items-center gap-2">
        Guess the answer here:
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="px-2 py-1 border rounded"
        />
      </label>

      <button
        type="submit"
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Guess
      </button>
    </form>
  );
}
