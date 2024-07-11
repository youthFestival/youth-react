import { Outlet } from "react-router-dom";
import Menu from "../features/dashboard/components/Menu";

function AdminDashBoard() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default AdminDashBoard;
