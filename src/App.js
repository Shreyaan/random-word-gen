import React, { useState, useEffect } from "react";
// import "./words.csv";
import { usePapaParse } from "react-papaparse";

function App() {
  const [count, setCount] = React.useState(0);
  const [parsedCsvData, setParsedCsvData] = useState([]);
  const { readRemoteFile } = usePapaParse();
  const url =
    "https://raw.githubusercontent.com/Shreyaan/vocab-telegram-bot/master/words.csv";
  // let resultObject;

  useEffect(
    function () {
      readRemoteFile(url, {
        header: true,
        worker: true,
        complete: (results) => {
          // resultObject = results;
          // console.log(resultObject);
          setParsedCsvData(results);
          // return resultObject;
        },
      });
    },
    [count]
  );

  return (
    <div className="App">
      {/* <button onClick={() => handleReadRemoteFile()}>readRemoteFile</button>; */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        readRemoteFile
      </button>
      {/* {parsedCsvData.data[0].word} */}
      {(parsedCsvData.data && JSON.stringify(parsedCsvData.data[0].word))}
    </div>
  );
}

export default App;
