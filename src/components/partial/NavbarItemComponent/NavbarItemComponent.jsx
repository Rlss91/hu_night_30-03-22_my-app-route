import { NavLink } from "react-router-dom";
import "./NavbarItemComponent.css";
const NavbarItemComponent = (props) => {
  return (
    <li className="nav-item">
      {/* in react we not using a tag we will use NavLink instead */}
      <NavLink
        className="nav-link"
        aria-current="page"
        to={`/${props.link.replace(" ", "").toLocaleLowerCase()}`}
        activeClassName="active-link"
      >
        {props.link}
      </NavLink>
    </li>
  );
};
export default NavbarItemComponent;
