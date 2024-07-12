import { NavLink } from "react-router-dom";
import "../styles/menu.css";
import { useState } from "react";

const icoPath = "/icons/adminDashboard";
const menuItems = [
  {
    path: "./dashboard",
    label: "대시보드",
    icon: icoPath + "/ic_dashboard.svg",
  },
  {
    path: "./members",
    label: "회원관리 및 조회",
    icon: icoPath + "/ic_members.svg",
  },
  { path: "./logs", label: "활동 로그", icon: icoPath + "/ic_logs.svg" },
  {
    path: "./register-festival",
    label: "축제 추가",
    icon: icoPath + "/ic_register_festival.svg",
  },
  {
    path: "./inquiries",
    label: "고객 문의",
    icon: icoPath + "/ic_inquiries.svg",
  },
];

function SideMenu() {
  const [isClose, setIsClose] = useState(false);

  const handleCloseBtnCliked = (e) => {
    setIsClose(!isClose);
  };

  return (
    <div className={`menu-container ${isClose ? "close" : ""}`}>
      <div className="nav-header">
        <div className="title">
          <img
            className="console-logo"
            src="youthfavicon.svg"
            alt="consoleLogo"
          />
          <span>Youth</span>
          <span>Admin DashBoard</span>
        </div>

        <button onClick={handleCloseBtnCliked}></button>
      </div>

      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          activeClassName="active"
          className={"menu-item"}
        >
          <img src={item.icon} alt={item.label} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default SideMenu;
