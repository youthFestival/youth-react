import { Outlet } from "react-router-dom";
import "../styles/adminDashBoard.css"
import Menu from "../features/dashboard/components/Menu";

function AdminDashBoard() {
  return (
    <div className="adminDashBoard">
      <Menu />
      <Outlet />
    </div>
  );
}

export default AdminDashBoard;
