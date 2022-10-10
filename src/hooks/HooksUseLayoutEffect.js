import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
    const inputRef = useRef(null);

    useLayoutEffect(() => {                       // call before the page rendering
        console.log(inputRef.current.value);
    }, []);

    useEffect(() => {                              // call after the page rendering
        inputRef.current.value = "HELLO";
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} value="ABHISHEKE" style={{ width: 400, height: 60 }} />
        </div>
    );
}

export default LayoutEffectTutorial;