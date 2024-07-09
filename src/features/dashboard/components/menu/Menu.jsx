import { NavLink } from "react-router-dom";

function Menu() {
  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {menuItems.map((item) => (
        <NavLink key={item.path} to={item.path} activeClassName="active">
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export default Menu;
