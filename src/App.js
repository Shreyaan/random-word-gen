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
    setrandomNUmber(Math.floor(Math.random() * 5348));
  }, [count]);
  
  useEffect(function () {
    readRemoteFile(url, {
      header: true,
      worker: true,
      complete: (results) => {
        setParsedCsvData(results);
      },
    });
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get random word
      </button>
      <br />
      {parsedCsvData.data &&
        JSON.stringify(parsedCsvData.data[randomNUmber].word)}
    </div>
  );
}

export default App;
