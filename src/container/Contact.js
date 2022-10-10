import React, { useReducer, useState } from 'react'

const initialState = [
    {
        id: Date.now(),
        name: "Abhishek",
        email: "abhi@gmail.com"
    }
]

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        case 'delete':
            return state.filter((contact) => {
                return contact.id !== action.payload.id;
            });
        default:
            throw new Error();
    }

}
const Contact = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name,
            email,
        };
        setName("");
        setEmail("");
        dispatch({ type: "add", payload: contact })
    }

    return (

        <div>
            <form onSubmit={addContact}>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <div><button>Add</button></div>
            </form>
            <ul>
                {state.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <h5>{contact.name} {contact.email}</h5>
                            <div>
                                <button onClick={() => dispatch({ type: 'delete', payload: { id: contact.id } })} >Delete</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Contact