import { useState } from "react";
import "./App.css";

export const App =()=> {
  const [result, setResult] = useState('');
  
  const handleClick = (number) => {
    setResult(result + number.target.value)
  }
  const handleDelete = () => {
    setResult(result.slice(0,-1))
  }
  const handleClear = () => {
    setResult('')
  }
  const handleEqual = () => {
    try {
      setResult(eval(result))
      
    } catch (error) {
      setResult('Error')
    }
  }
  const handlePercentage = () => {
    
    setResult(eval(result/100))
  }
 

  return (
    <>
      <div className="Container">
        <input className="display" value={result}></input>
        <div className="containerKeys">
          <div className="keys">
            <input type='button' value="7" className="button" onClick={handleClick}></input>
            <input type='button' value="8" className="button" onClick={handleClick}></input>
            <input type='button' value="9" className="button" onClick={handleClick}></input>
            <input type='button' value="Del" className="button" onClick={handleDelete}></input>
            <input type='button' value="AC" className="button" onClick={handleClear}></input>
          </div>
          <div className="keys">
            <input type='button' value="4" className="button" onClick={handleClick}></input>
            <input type='button' value="5" className="button" onClick={handleClick}></input>
            <input type='button' value="6" className="button" onClick={handleClick}></input>
            <input type='button' value="*" className="button" onClick={handleClick}></input>
            <input type='button' value="+" className="button" onClick={handleClick}></input>
          </div>
          <div className="keys">
            <input type='button' value="1" className="button" onClick={handleClick}></input>
            <input type='button' value="2" className="button" onClick={handleClick}></input>
            <input type='button' value="3" className="button" onClick={handleClick}></input>
            <input type='button' value="-" className="button" onClick={handleClick}></input>
            <input type='button' value="/" className="button" onClick={handleClick}></input>
          </div>
          <div className="keys">
            <input type='button' value="0" className="button" onClick={handleClick}></input>
            <input type='button' value="." className="button" onClick={handleClick}></input>
            <input type='button' value="%" className="button" onClick={handleClick} ></input>
            <input type='button' value="=" className="button" onClick={handleEqual}></input>
            <input type='button' value="%" className="button" onClick={handlePercentage} id='btn'></input> 
          </div>
        </div>
      </div>
      <h2>El boton rojo corresponde al porcentaje</h2>
    </>
  );
}

