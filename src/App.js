import React, { useState, useEffect } from "react";
import WordsJson from "./convertcsv.js";

function App() {
  const [count, setCount] = React.useState(0);
  const [randomNUmber, setrandomNUmber] = React.useState(
    Math.floor(Math.random() * 5348)
  ); 
  const [parsedCsvData, setParsedCsvData] = useState([]);

  useEffect(() => {}, [count]);

  useEffect(
    function () {
      setrandomNUmber(Math.floor(Math.random() * 5348));
      setParsedCsvData(WordsJson[randomNUmber]);
    },
    [count]
  );

  return (
    <div className="App">
      <br />
      <h1 className="heading">Random Word Generator</h1>
      <p>
        <span>Word</span>: {parsedCsvData.word && parsedCsvData.word}
        <br />
        <br />
        <span>Definition</span>:{" "}
        {parsedCsvData.word && parsedCsvData.definition}
      </p>
      <br />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get random word
      </button>
    </div>
  );
}

export default App;
