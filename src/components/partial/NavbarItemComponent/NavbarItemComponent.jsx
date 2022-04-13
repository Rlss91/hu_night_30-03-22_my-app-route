import { NavLink } from "react-router-dom";
import "./NavbarItemComponent.css";
//nav-link
//active-link
const NavbarItemComponent = (props) => {
  return (
    <li className="nav-item">
      {/* in react we not using a tag we will use NavLink instead */}
      <NavLink
        className={(navData) => {
          return "nav-link " + (navData.isActive ? "active-link" : "");
        }}
        aria-current="page"
        to={`/${props.link.replace(" ", "").toLocaleLowerCase()}`}
      >
        {props.link}
      </NavLink>
    </li>
  );
};
export default NavbarItemComponent;
