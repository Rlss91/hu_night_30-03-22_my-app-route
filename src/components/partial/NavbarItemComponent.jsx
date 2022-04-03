import { NavLink } from "react-router-dom";
const NavbarItemComponent = (props) => {
  return (
    <li className="nav-item">
      {/* in react we not using a tag we will use NavLink instead */}
      <NavLink
        className="nav-link"
        aria-current="page"
        to={`/${props.link.toLowerCase()}`}
      >
        {props.link}
      </NavLink>
    </li>
  );
};
export default NavbarItemComponent;
