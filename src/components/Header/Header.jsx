import "./Header.css";

import NavList from "./NavList/NavList";
import NavRight from "./NavRight/NavRight";
import SVGComponent from "./Svg/SVGComponent";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <SVGComponent className="logo" />
        <NavList />
        <NavRight className="nav-right" />
      </div>
    </header>
  );
};

export default Header;
