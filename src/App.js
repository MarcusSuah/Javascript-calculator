import React, { useState } from "react";
import './App.css';
 

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const backspace = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="+-">
        <form>
          <input type="text" value={result} id="display" />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick} id="divide">
            &divide;
          </button>
          <button name="7" onClick={handleClick} id="seven">
            7
          </button>
          <button name="8" onClick={handleClick} id="eight">
            8
          </button>
          <button name="9" onClick={handleClick} id="nine">
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick} id="multiply">
            &times;
          </button>
          <button name="4" onClick={handleClick} id="four">
            4
          </button>
          <button name="5" onClick={handleClick} id="five">
            5
          </button>
          <button name="6" onClick={handleClick} id="six">
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick} id="subtract">
            &ndash;
          </button>
          <button name="1" onClick={handleClick} id="one">
            1
          </button>
          <button name="2" onClick={handleClick} id="two">
            2
          </button>
          <button name="3" onClick={handleClick} id="three">
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick} id="add">
            +
          </button>
          <button name="0" onClick={handleClick} id="zero">
            0
          </button>
          <button name="." onClick={handleClick} id="decimal">
            .
          </button>
          <button className="highlight" onClick={calculate} id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
