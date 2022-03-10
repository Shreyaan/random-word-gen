import React, { useState, useEffect } from "react";
import { usePapaParse } from "react-papaparse";

function App() {
  const [count, setCount] = React.useState(0);
  const [parsedCsvData, setParsedCsvData] = useState([]);
  const { readRemoteFile } = usePapaParse();
  const url =
    "https://raw.githubusercontent.com/Shreyaan/vocab-telegram-bot/master/words.csv";


  useEffect(
    function () {
      readRemoteFile(url, {
        header: true,
        worker: true,
        complete: (results) => {
          setParsedCsvData(results);
        },
      });
    },
    [count]
  );
let randomNumber = 0
  useEffect(
    function () {
    let  min = Math.ceil(0);
     let max = Math.floor(5348);
     randomNumber= Math.floor(Math.random() * (max - min) + min);

     },
    [count]
  );

  return (
    <div className="App">
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        readRemoteFile
      </button>
      {parsedCsvData.data[randomNumber].word}
    </div>
  );
}

export default App;
