import React, { useState, useMemo, useEffect, useCallback } from 'react'



/// useCallback use for memoize the function
/// useMemo  use for memoize the value
const HookUseCallback = () => {

    const [counter, setCounter] = useState(1);
    const result = useMemo(() => {
        return factorial(counter)
        console.log("count timme")
    }, [counter]);

    const [name, setName] = useState('abhishek')
    const displayName = useCallback(() => {
        return name
    }, [name]);

    return (
        <div>
            <div><h2>HookUseCallback</h2></div>
            <hr />
            <hr />
            <h1>Factorial of {counter} is  :<span>{result}</span> </h1>
            <div>
                <hr />
                <hr />
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
            <hr />
            <hr />
            <div>
                <label> Enter Name :</label>
            </div>
            <input type="text" placeholder='Enter Name' value={name}
                onChange={(e) => setName(e.target.value)} />
            <hr />
            <hr />
            <DisplayName displayName={displayName}></DisplayName>
        </div>
    )
}
function factorial(n) {
    if (n < 0) { return -1; }

    if (n === 0) { return 1; }

    return n * factorial(n - 1);

}

const DisplayName = ({ displayName }) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue(displayName());
        console.log("component render");

    }, [displayName]);
    return <p>{`my name is ${value}`}</p>
}

export default HookUseCallback