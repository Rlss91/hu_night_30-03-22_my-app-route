import { useSelector } from "react-redux";

import NavbarItemComponent from "./partial/NavbarItemComponent";

const linksArr = ["Home", "Contact", "About us", "Counter"];

const NavbarComponent = () => {
  //redux
  //redux - get state
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <ul className="nav">
      {linksArr.map((item, idx) => {
        return <NavbarItemComponent key={idx} link={item} />;
      })}
      {loggedIn ? (
        <NavbarItemComponent link="Logout" />
      ) : (
        <NavbarItemComponent link="Login" />
      )}
    </ul>
  );
};

export default NavbarComponent;
