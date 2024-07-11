import { NavLink } from "react-router-dom";
import "./menu.css";
function Menu() {
  const menuItems = [
    { path: "/home", label: "대시보드" },
    { path: "/about", label: "회원관리 및 조회" },
    { path: "/contact", label: "활동 로그" },
    { path: "/contact", label: "축제 추가" },
    { path: "/contact", label: "고객 문의" },
  ];

  return (
    <div className="menu-container">
      <div className="nav-header">
        <span>Youth</span>
        <span>Admin DashBoard</span>
      </div>
      {menuItems.map((item) => (
        <NavLink key={item.path} to={item.path} activeClassName="active">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Menu;
