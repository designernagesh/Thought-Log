import { useState } from 'react';
import './App.css';


function App() {
  const currentTime = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const time = `${h}:${m}:${s}`;
    return time; 
  }

  const [ inputText, setInputText ] = useState("");
  const [ thoughts, setThoughts ] = useState([]);

  const changeHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    thoughts.push(`${inputText} ${currentTime()}`);
    setThoughts(thoughts);
    setInputText("");
  }

  return (
    <>
      <h1>Thought Log</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='Type Thought' value={inputText} onChange={changeHandler} />
        <button type='submit'>Post</button>
      </form>
      <ul>
        {thoughts.map( thought => {
          return (
            <li>
              { thought }
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
