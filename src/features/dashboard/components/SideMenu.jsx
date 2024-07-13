import { NavLink } from "react-router-dom";
import "../styles/side-menu.css";
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
  return (
    // 사이드바 활성화 및 비활성화 처리
    <div className={"sidebar"}>
      {/* 로고 영역 */}
      <div className="nav-header">
        <div className="title">
          <span>Youth</span>
          <span>Admin DashBoard</span>
        </div>
        <img
          className="console-logo"
          src="/youthfavicon.png"
          alt="consoleLogo"
        />
      </div>

      {/* 메뉴 영역 */}
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          activeClassName="active"
          className={"menu-item"}
        >
          {/* 메뉴 최소화 시, 아이콘 */}
          <img src={item.icon} alt={item.label} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default SideMenu;
