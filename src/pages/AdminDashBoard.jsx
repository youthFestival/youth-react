import { Outlet } from "react-router-dom";
import AdminPageNav from "../components/nav/adminNav/AdminNav";

function AdminDashBoard() {
  return (
    <>
      <AdminPageNav />
      <Outlet />
    </>
  );
}

export default AdminDashBoard;
