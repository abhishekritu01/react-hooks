import React, { useState } from 'react'
import Crud from '../container/Crud';
import '../App.css'

const HookUseState = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState("Arnav");
    const [name, setName] = useState("abhishek");
    const [flag, setFlag] = useState(false);
  
    // part =1
    const onChange = (event) => {
        const newValue = event.target.value;
        setInput(newValue);
    }
    // part =2
    const increment = () => {
        setCounter(counter + 1);
        // setCounter((prevState)=>prevState+1);
        // setCounter((prevState)=>prevState+1);
    }

    const decrement = () => {
        setTimeout(() => {
            setCounter(counter - 1);
        }, 1000)
    }
    // part =3
    // const changeNmae = () => {
    //     setName("Arnav kumar jha");
    //}

    // part-4
    const changeNmae = () => {
        return setFlag(!flag)
    }

  

    return (
        <div className=''>
            <h1>UseState Hook</h1>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <hr />
            <hr />
            <input className='input' placeholder='Enter something' onChange={onChange} />
            {input}
            <hr />
            <hr />
            <button onClick={changeNmae}>Clicked Me!</button>
            <p>Hello {flag ? name : ''}</p>
            <hr />
            <hr />
            <Crud />
        </div>
    )
}
export default HookUseState