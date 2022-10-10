//context -> collection of state

import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";
import Counter from "./counter/Counter";

export const AppContext = createContext(null);


const HookUseContext = () => {
    const [username, setUsername] = useState("");
    
    return (
        <div>
            <h2>HookUseContext</h2>
            <AppContext.Provider value={{ username, setUsername }}>
                <Login /> <User />
            </AppContext.Provider>
            <hr />
            <hr />
            <Counter />
        </div>
    )
}

export default HookUseContext