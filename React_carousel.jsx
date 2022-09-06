import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [startIndex, setStartIndex] = useState(0);
  const handleClick = function (e) {
    if (e.target.className === "forward") {
      if (startIndex >= 2) {
        setStartIndex(0);
        return;
      }
      setStartIndex((prev) => prev + 1);
    } else if (e.target.className === "back") {
      if (startIndex <= 0) {
        setStartIndex(2);
        return;
      }
      setStartIndex((prev) => prev - 1);
    }

    console.log(e.target.className);
  };

  return (
    <div className="App" onClick={handleClick}>
      <button className="back"> Back </button>
      {/* {`section ${selected && 'section_selected'}`} */}
      <div className={`slides slide1  ${startIndex === 0 ? "active" : ""}`}>
        Slide 1
      </div>
      <div className={`slides slide2 ${startIndex === 1 ? "active" : ""}`}>
        Slide 2
      </div>
      <div className={`slides slide3  ${startIndex === 2 ? "active" : ""}`}>
        Slide 3
      </div>
      <button className="forward"> forward </button>
    </div>
  );
}


/*styles.js
.App {
  font-family: sans-serif;
  text-align: center;
  position: relative;
  padding: 0px;
  margin: 0px;
}

.slides {
  height: 100px;
  border: 1px solid;
  line-height: 100px;
  display: none;
}

.slide1 {
  background: red;
}

.slide2 {
  background: yellow;
}

.slide3 {
  background: green;
}

.active {
  display: block;
}

.back {
  position: absolute;
  left: 0;
  top: 50px;
  transform: translate(0%, -50%);
}
.forward {
  position: absolute;
  right: 0;
  top: 50px;
  transform: translate(0%, -50%);
}
*/
