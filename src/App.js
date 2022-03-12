import React, { useState, useEffect } from "react";
import WordsJson from "./convertcsv.js";

function App() {
  const [count, setCount] = React.useState(0);
  const [randomNumberArray, setrandomNumberArray] = React.useState([]);
  const [randomNUmber, setrandomNUmber] = React.useState(
    Math.floor(Math.random() * 5348)
  );
  const [parsedCsvData, setParsedCsvData] = useState([]);

  

  useEffect(
    function () {
      setrandomNUmber(Math.floor(Math.random() * 5348));
      console.log('ran')
      setParsedCsvData(WordsJson[randomNUmber]);
      setrandomNumberArray(array => {
      const list = array.concat(randomNUmber)
    return list });
      console.log(randomNumberArray)
    },
    [count]
  );

  
      function prevWord() {
        
          setParsedCsvData(WordsJson[(randomNumberArray[randomNumberArray.length-2])]);
          // randomNumberArray.pop;
        
      }

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
      {randomNumberArray.length>0 && (
        <button onClick={() => prevWord()}>
          Goto previous word
        </button>
      )}
    </div>
  );
}

export default App;
