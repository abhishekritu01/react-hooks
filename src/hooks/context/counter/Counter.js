import React, { useState } from 'react'
import Fcomponent from './Fcomponent'
// import Ccomponent from './Ccomponent'

import { CounterContext } from './CounterContext'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <h3>Counter</h3>
            <hr />
            <h3>App component</h3>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            {/* <CounterContext.Provider value="hello context"> */}
            <CounterContext.Provider value={{counter,setCounter}}>
                <Fcomponent  />
                {/* <Ccomponent /> */}
            </CounterContext.Provider>
        </div>
    )
}

export default Counter