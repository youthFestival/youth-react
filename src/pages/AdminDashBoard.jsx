import { Outlet } from "react-router-dom";
import "../styles/adminDashBoard.css";
import { SideMenu } from "../features/dashboard";

function AdminDashBoard() {
  return (
    <div className="adminDashBoard">
      <SideMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashBoard;
