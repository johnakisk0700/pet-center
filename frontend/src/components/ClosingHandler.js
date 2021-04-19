import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function ClosingHandler(ref, setMarkesComp) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setMarkesComp(() => setMarkesComp(false)); 
                console.log('wtf')
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({children, setMarkesComp}) {
    const wrapperRef = useRef(null);
    ClosingHandler(wrapperRef, setMarkesComp);

    return <div ref={wrapperRef}>{children}</div>;
}