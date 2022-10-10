import React, { useReducer } from 'react'
import Contact from '../container/Contact';

const initialState = {
    count: 0,
    showText: true
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
    }
}
const HookUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>HookUseReducer</h1>
            <h2>{state.count}</h2>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "toggleShowText" });
            }}>CLick Me</button>
            <h2>{state.showText && <p>Show Text</p>}</h2>
            <hr />
            <hr />
            <Contact />
        </div>
    )
}

export default HookUseReducer