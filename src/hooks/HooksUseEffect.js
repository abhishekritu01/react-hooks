import React, { useState,useEffect } from 'react';
import axios from 'axios';

const HooksUseEffect = () => {
    const [data,setData]=useState("");
    const [count,setCount]=useState(0);

    // whenever State is change useEffect rerender immeditaly
    useEffect(() => {
        // console.log("hello abhishek");
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                // console.log(response.data);
                setData(response.data[10].email);
                console.log("Api is Called");
            });  
    },[]);
    return (
        <div>
            <h1>UseEffect</h1>
            <h3>{data}</h3>
            <hr />
            <hr />
            <h3>{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>count</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
    )
}

export default HooksUseEffect