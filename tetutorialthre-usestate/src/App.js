import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState(0);

  const [pharagraph, setPharagraph] = useState('');

  function increment() {
    setName(name+1);
  }

  function decrement() {
    setName(name-1);
  }

  function handleInput(e) {
    setPharagraph(e);
  }

  return (
    <div className="App">
      <h1>Increment and Decrement</h1>
      <h1>{name}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={(e) => handleInput(e.target.value)} />
      <p>{pharagraph}</p>
    </div>
  );
}

export default App;
