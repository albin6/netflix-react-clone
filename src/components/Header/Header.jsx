import "./Header.css";

import NavList from "./NavList/NavList";
import SVGComponent from "./Svg/SVGComponent";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <SVGComponent className="logo" />
        <NavList />
      </div>
    </header>
  );
};

export default Header;
