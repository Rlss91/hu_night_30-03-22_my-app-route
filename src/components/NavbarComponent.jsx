const linksArr = ["Home", "Contact", "About us"];

const NavbarComponent = () => {
  return (
    <ul className="nav">
      {linksArr.map((item, idx) => {
        return (
          <li className="nav-item" key={idx}>
            <a className="nav-link" aria-current="page" href="#">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarComponent;
