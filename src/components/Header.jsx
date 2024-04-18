import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/yukihiro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faSun,
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <>
      <li>
        <NavLink
          to="/works"
          style={({ isActive }) =>
            isActive ? { color: "rgb(244, 110, 202)" } : {}
          }
        >
          作品
          <br />
          Works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skill"
          style={({ isActive }) =>
            isActive ? { color: "rgb(244, 110, 202)" } : {}
          }
        >
          スキル
          <br />
          Skill
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { color: "rgb(244, 110, 202)" } : {}
          }
        >
          自己紹介
          <br />
          About
        </NavLink>
      </li>
      <li>{/* <Link to="/contact">お問い合わせ<br/>Contact</Link> */}</li>
    </>
  );
};

const Hmbarger = () => {
  const [active, setActive] = useState("");

  const handleClick = () => {
    active === "" ? setActive("active") : setActive("");
  };
  return (
    <div className={"hmenu" + active}>
      <ul>
        <li>
          <NavLink to="/works">作品</NavLink>
          <FontAwesomeIcon icon={faSun} style={{ color: "white" }} />
        </li>
        <li>
          <NavLink to="/skill">スキル</NavLink>
          <FontAwesomeIcon icon={faLaptopCode} style={{ color: "white" }} />
        </li>
        <li>
          <NavLink to="/about">自己紹介</NavLink>
          <FontAwesomeIcon icon={faImagePortrait} style={{ color: "white" }} />
        </li>
        {/* <li>
            <span className="material-symbols-outlined">
              mail
            </span>
            <Link to="/contact">お問い合わせ</Link>
          </li> */}
      </ul>
      <div className="hmbtn" onClick={handleClick}>
        <span className={active}></span>
        <span className={active}></span>
        <span className={active}></span>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1 className="home">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </h1>
      <nav>
        <ul className="header-menu">
          <Menu />
        </ul>
      </nav>
      <Hmbarger />
    </header>
  );
};
export default Header;
