import React, { useState, useMemo } from 'react'

const HookuseMemo = () => {
    const [counter, setCounter] = useState(1)
    const [name, setName] = useState('abhishek')

    const result = useMemo(() => {
        return factorial(counter)
        console.log("count timme")
    }, [counter]);
    return (
        <div>
            <h2>HookuseMemo</h2>
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
            <DisplayName name={name}></DisplayName>
            {/* <p>{`my name is ${name}`}</p> */}
        </div>
    )
}
function factorial(n) {
    let i = 0;
    while (i < 200000000) i++;
    if (n < 0) { return -1; }

    if (n === 0) { return 1; }

    return n * factorial(n - 1);

}
{/* const DisplayName = ({ name }) => {
    console.log('render');
    return <p>{`my name is ${name}`}</p>
} */}
const DisplayName = React.memo(({name })=> {
    console.log('render');
    return <p>{`my name is ${name}`}</p>
})

export default HookuseMemo