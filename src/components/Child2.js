import React, {useReducer} from 'react';
import CounterReducer from '../context/CounterReducer';

const Child2 = () => {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    return (
        <div>
            <h1>Value from contxtReducer: {state} </h1>
            <h2></h2>
            <button onClick = {() => dispatch('INCREMENT')}>Update Reducer</button>
        </div>
    )
}

export default Child2
