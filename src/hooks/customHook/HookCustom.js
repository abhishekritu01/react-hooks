import React, { useState } from 'react'
import useCounter from './useCounter'
import ScreenComponent from './ScreenComponent.js';


const HookCustom = () => {
    // const [counter,increment,decrement,reset]=useCounter(0);
    const [value, increment, decrement, reset] = useCounter(0);
    return (
        <>
            <div>
                <h4>HookCustom</h4>
                <div>
                    <h1>{value}</h1>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>decrement</button>
                    <button onClick={reset}>reset</button>
                    <hr />
                    <hr />
                </div>
                <ScreenComponent />
            </div>
            

        </>
    )
}

export default HookCustom