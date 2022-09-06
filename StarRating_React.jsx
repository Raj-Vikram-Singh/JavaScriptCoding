import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [starIndex, setStarIndex] = useState(0);
  const Star = function ({ handleClick, className, index, starIndex }) {
    return (
      <div className={starIndex >= index ? "star highlight" : "star"}></div>
    );
  };
  const numberOfStars = new Array(1, 2, 3, 4, 5);

  const handleClick = function (index) {
    setStarIndex(index);
    console.log(starIndex);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="starContainer">
        {numberOfStars.map((item, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <Star index={index} starIndex={starIndex} />
          </div>
        ))}
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


// styles.css
// .App {
//   font-family: sans-serif;
//   text-align: center;
// }

// .starContainer {
//   display: flex;
// }
// .star {
//   width: 20px;
//   height: 20px;
//   border: 1px solid;
//   /* sbackground: yellow; */
//   margin-right: 5px;
// }

// .highlight {
//   background: red;
// }
