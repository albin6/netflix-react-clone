import * as React from "react";
const SearchSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    role="img"
    data-icon="MagnifyingGlassStandard"
    aria-hidden="true"
    className="search-icon"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
      fill="#fff"
    />
  </svg>
);
export default SearchSVG;
