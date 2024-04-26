import React, { useState } from 'react';


const App = () => {
  const [bgcolor, setBgColor] = useState("orange");
  const [text, setText] = useState("Project 1 started...");
  const [colors, setColors] = useState("green")


  const changebgcolor = () => {
    setBgColor('cyan');
    setText("Project 1 completed...");
    setColors("red");
  }
  const normalData = () => {
    setBgColor("orange");
    setText("Project 1 started...");
    setColors("green");
  }



  return (
    <>

      <div style={{ backgroundColor: bgcolor, color: colors }}>
        <h1 className="text-center">{text}</h1>
      </div>
      <div className="btn">
        <button className="btn btn-success" onClick={changebgcolor} onDoubleClick={normalData}>Click Me</button>
      </div >
    </>
  )
}


export default App
