import React, { useState, useRef, useEffect } from 'react'

const HooksUseRef = () => {

    const [inputValue, setInputValue] = useState('');
    const previousInputValue = useRef('');

    useEffect(() => {
        previousInputValue.current = inputValue;
        console.log('useEffect re-render');
    }, [inputValue]);


    // const [inputValue1, setInputValue1] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });



    return (
        <div>
            <h1>HooksUseRef</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
            <hr />
            <hr />
            {/* <div>
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                />
                <h1>Render Count: {count.current}</h1>
            </div> */}
        </div>
    )
}

export default HooksUseRef