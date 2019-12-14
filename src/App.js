import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    const filteredWords = wordsArr.filter(word => word !== "");
    return filteredWords.length;
  }

  return (
    <div>
      <h1>TypeTronic</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>The amount of time remaining: </h4>
      <button
        onClick={() => {
          countWords(text);
        }}
      >
        START
      </button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
