import { useState, useEffect } from "react";

export default function App() {
  const { width, height } = useWindowSize();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>width {width} </h2>
      <h2>height {height} </h2>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  }); //initialize the window size

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleWindowResize); // register event listener on component mount
    return () => window.removeEventListener("resize", handleWindowResize); // remove event listener when component is unmounted
  }, []);
  return windowSize;
}
