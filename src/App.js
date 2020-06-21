import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import CounterContext from './context/CounterContext';

function App() {
  let counterValue = useState(0)
  // let [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={counterValue}>
    <div className="App">
     <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
