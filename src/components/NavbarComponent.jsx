import { NavLink } from "react-router-dom";

const linksArr = ["Home", "Contact", "About us", "Login"];

const NavbarComponent = () => {
  return (
    <ul className="nav">
      {linksArr.map((item, idx) => {
        return (
          <li className="nav-item" key={idx}>
            {/* in react we not using a tag we will use NavLink instead */}
            <NavLink
              className="nav-link"
              aria-current="page"
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarComponent;
