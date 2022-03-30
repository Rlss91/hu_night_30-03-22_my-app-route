import { NavLink } from "react-router-dom";

const linksArr = ["Home", "Contact", "About us", "Login"];

const NavbarComponent = () => {
  return (
    <ul className="nav">
      {linksArr.map((item, idx) => {
        return (
          <li className="nav-item" key={idx}>
            <NavLink className="nav-link" aria-current="page" to={`/${item}`}>
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarComponent;
