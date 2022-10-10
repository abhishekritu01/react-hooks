import React, { useState } from 'react'

export default function useCounter(initialvalue) {
    const [value, setValue] = useState(initialvalue)

    const increment = () => {
        setValue(value + 1)
    };
    const decrement = () => {
        setValue(value - 1)
    };
    const reset = () => {
        setValue(initialvalue)
    };
    return [value, increment, decrement, reset];
}