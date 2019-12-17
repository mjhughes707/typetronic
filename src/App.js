import React, { useState, useEffect, useRef } from "react";

function App() {
  const START_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(START_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textareaRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function startGame() {
    setText("");
    setWordCount(0);
    setTimeRemaining(START_TIME);
    setIsTimeRunning(true);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(getWordCount(text));
  }

  function getWordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    return filteredWords.length;
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>TypeTronic</h1>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        disabled={!isTimeRunning}
        value={text}
      />
      <h4>The amount of time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        START
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
