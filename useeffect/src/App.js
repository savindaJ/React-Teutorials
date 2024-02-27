import { useEffect, useState } from 'react';
import ButtonSection from './components/ButtonSection';
import NavBar from './components/NavBar';

function App() {

  const[ count, setCount] = useState(0);

  const[text,setText] = useState('');

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count]);

  function set(text) {
    setText(text);
  }

  return (
    <div className="App">
      <NavBar count={count} pass={text}/>
      <ButtonSection increment={increment} decriment={decrement} set={(prop)=>{
        set(prop);
      }}/>
      <h2 style={{textAlign:'center'}}>{text}</h2>
    </div>
  );
}

export default App;
