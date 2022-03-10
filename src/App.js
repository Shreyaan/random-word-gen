import React, { useState, useEffect } from "react";
// import "./words.csv";
import { usePapaParse } from "react-papaparse";

function App() {
  const [count, setCount] = React.useState(0);
  const [randomNUmber, setrandomNUmber] = React.useState(0);
  const [parsedCsvData, setParsedCsvData] = useState([]);
  const { readRemoteFile } = usePapaParse();
  const url =
    "https://raw.githubusercontent.com/Shreyaan/vocab-telegram-bot/master/words.csv";

  useEffect(() => {
   ;
  }, [count]);

  useEffect(function () {
    setrandomNUmber(Math.floor(Math.random() * 5348))
    readRemoteFile(url, {
      header: true,
      worker: true,
      complete: (results) => {
        if (results.data) {
          setParsedCsvData(results.data[randomNUmber]);
        }
      },
    });
  }, [count]);

  return (
    <div className="App">
      <br />
     <p>
       <h1>Random Word Generator</h1>
       <span>word</span>: {parsedCsvData.word && parsedCsvData.word}
        <br />
        <br />
        <span>Definition</span>: {parsedCsvData.word && parsedCsvData.definition	}
     </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get random word
      </button>
    </div>
  );
}

export default App;
