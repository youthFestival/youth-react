import { NavLink } from "react-router-dom";
import "./menu.css";
function Menu() {
  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <NavLink key={item.path} to={item.path} activeClassName="active">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Menu;
