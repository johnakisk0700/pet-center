import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function ClosingHandler(ref, filterComp) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                filterComp(() => filterComp(false)); 
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, filterComp]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({children, filterComp}) {
    const wrapperRef = useRef(null);
    ClosingHandler(wrapperRef, filterComp);

    return <div ref={wrapperRef} className='closing-handler'>{children}</div>;
}