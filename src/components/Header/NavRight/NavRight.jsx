import "./NavRight.css";
import BellSVG from "./Svg/BellSVG";
import SearchSVG from "./Svg/SearchSVG";

const NavRight = () => {
  return (
    <div className="nav-right">
      <span>
        <button className="nav-right-btn search-btn">
          <SearchSVG className="svg" />
        </button>
      </span>
      <span>children</span>
      <span>
        <button className="nav-right-btn bell-btn">
          <BellSVG className="svg" />
        </button>
      </span>
      <span>
        <span>
          <img className="avatar-img" src="https://occ-0-6501-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="Avatar" />
        </span>
        <span>^</span>
      </span>
    </div>
  );
};

export default NavRight;
