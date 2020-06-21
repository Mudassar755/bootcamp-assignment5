import React,{useContext} from 'react';
import counterContext from '../context/CounterContext'

const Child = () => {
    let countValue = useContext(counterContext)
    return (
        <div>
    <h2>Counter value is CounterContext: {countValue[0]}</h2>
    <button onClick={() => countValue[1](++countValue[0]) }>Update Context</button>
        </div>
    )
}

export default Child
