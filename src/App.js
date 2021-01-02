import React, { useState, useRef, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [red, setRed] = useState(130);
  const [green, setGreen] = useState(150);
  const [blue, setBlue] = useState(170);

  const colour = useRef(`rgb(${red},${green},${blue})`);

  useEffect(() => {
    colour.current = `rgb(${red},${green},${blue})`;
  });

  const hexList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  function findHexCode(num) {
    let firstVal, secondVal;
    firstVal = Math.floor(num / 16);
    let diff = (num / 16 - firstVal);
    secondVal = Math.floor(diff.toFixed(2) * 16);
    let clrCode = `${hexList[firstVal]}${hexList[secondVal]}`;
    return clrCode;
  }

  return (
    <main className="main" style={{backgroundColor: colour.current}}>
      <div className="card" style={{width: '22rem'}}>
        <div className="card-body">
          <h3 className="card-title">Colour Picker</h3>
          <p className="card-text">Welcome to the React Colour Picker! Find the code for any colour, or play with the scrubbers below to find your favourite colour!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input type="range" min="0" max="255" value={red} onChange={(e)=>{setRed(e.target.value)}} /><label className="slider px-3 text-danger" id="red"><b>Red</b></label>
          </li>
          <li className="list-group-item">
            <input type="range" min="0" max="255" value={green} onChange={(e)=>{setGreen(e.target.value)}} /><label className="slider px-3 text-success" id="green"><b>Green</b></label>
          </li>
          <li className="list-group-item">
            <input type="range" min="0" max="255" value={blue} onChange={(e)=>{setBlue(e.target.value)}} /><label className="slider px-3 text-primary" id="blue"><b>Blue</b></label>
          </li>
        </ul>
        <div className="card-body row text-centre">
          <p className="card-text col" id="rgb">{`rgb(${red},${green},${blue})`}</p>
          <p className="card-text col">#<span id="hexcode">{findHexCode(red) + findHexCode(green) + findHexCode(blue)}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
