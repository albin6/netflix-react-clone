import * as React from "react";
const SVGComponent = (props) => (
    <svg
        width="40px"
        height="40px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="#000000" />
    </svg>
);
export default SVGComponent;