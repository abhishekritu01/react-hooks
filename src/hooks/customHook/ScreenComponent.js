import React from 'react'
import useScreen from './useScreen'

const ScreenComponent = () => {
    const screenSize =useScreen();
    return (
        <div>
            <div>ScreenComponent</div>
            <div>
                <h3>we are in {screenSize}</h3>
            </div>

        </div>
    )
}

export default ScreenComponent