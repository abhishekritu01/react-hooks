import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const Crud = () => {

    const [name,setName] =useState('abhishek');
    const [names, setNames] = useState([]);
    const unique_id = uuid();

    // part 5
    function addNames(e) {
        e.preventDefault();
        setNames([...names, { id: unique_id.length, name }]);
        console.log(names);
        setName("");
    }
    return (
        <div>
            <h3>Todo</h3>
            <form onSubmit={addNames}>
            <input
                className='input'
                type="text"
                value={name}
                placeholder='Enter something'
                onChange={(e) => setName(e.target.value)}
            />
            <button>Submit</button>
        </form>
            <ul>
                {names.map((item) => (
                    <li key={item.unique_id}>{item.name}</li>
                ))}
            </ul></div>
    )
}

export default Crud