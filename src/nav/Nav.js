import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HookUseState from '../hooks/HookUseState'
import HookUseReducer from '../hooks/HookUseReducer'
import HooksUseEffect from '../hooks/HooksUseEffect'
import HooksUseRef from '../hooks/HooksUseRef';
import HooksUseLayoutEffect from '../hooks/HooksUseLayoutEffect'
import UseImperativeHandle from '../hooks/UseImperativeHandle.js'
import HookUseContext from '../hooks/context/HookUseContext'
import HookuseMemo from '../hooks/HookuseMemo'
import HookUseCallback from '../hooks/HookUseCallback';
import HookCustom from '../hooks/customHook/HookCustom';





const Nav = () => {

    return (
        <>
            <h1>React-Hooks</h1>
            <div>
                <div>
                    <Router>
                        <div className='Nav'>
                            <Link to='/' >React-Hooks</Link>
                            <Link to='/HookUseState' >HookUseState</Link>
                            <Link to='/HookUseReducer' >HookUseReducer</Link>
                            <Link to='/HooksUseEffect' >HooksUseEffect</Link>
                            <Link to='/HooksUseRef' >HooksUseRef</Link>
                            <Link to='/HooksUseLayoutEffect' >HooksUseLayoutEffect</Link>
                            <Link to='/UseImperativeHandle' >UseImperativeHandle</Link>  
                            <Link to='/HookUseContext' >HookUseContext</Link>
                            <Link to='/HookuseMemo' >HookuseMemo</Link>
                            <Link to='/HookUseCallback' >HookUseCallback</Link>
                            <Link to='/HookCustom' >HookCustom</Link>
                        </div>
                        <Routes>
                            <Route exact path='/HookUseState' element={<HookUseState />} />
                            <Route exact path='/HookUseReducer' element={<HookUseReducer />} />
                            <Route exact path='/HooksUseEffect' element={<HooksUseEffect />} />
                            <Route exact path='/HooksUseRef' element={<HooksUseRef />} />
                            <Route exact path='/HooksUseLayoutEffect' element={<HooksUseLayoutEffect />} />
                            <Route exact path='/UseImperativeHandle' element={<UseImperativeHandle />} />
                            <Route exact path='/HookUseContext' element={<HookUseContext />} />
                            <Route exact path='/HookuseMemo' element={<HookuseMemo/>} />
                            <Route exact path='/HookUseCallback' element={<HookUseCallback />} />
                            <Route exact path='/HookCustom' element={<HookCustom />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default Nav