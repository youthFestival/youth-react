import { Outlet, useNavigate } from "react-router-dom";
import "../styles/adminDashBoard.css";
import { SideMenu } from "../features/dashboard/components";
import { useEffect } from "react";

function AdminDashBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Log the current path
    console.log(currentPath);

    // Example usage: navigate to a different path based on the current path
    if (currentPath === "/admin") {
      navigate("/admin/dashboard");
    }
  }, []);

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
