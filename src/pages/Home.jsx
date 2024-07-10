import { NavLink } from "react-router-dom";
const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  padding: "10px",
  margin: "5px",
  borderRadius: "5px",
  background: "#4A95FF",
  fontWeight: "bold",
};

function Home() {
  return (
    <center style={{ marginTop: "200px" }}>
      <img
        src="youthfavicon.png"
        width={"200px"}
        height={"200px"}
        alt={"youth logos"}
      />
      <h1>Youth 24시간 영업중</h1>
      <NavLink to="/calendar" style={navLinkStyle}>
        Calendar
      </NavLink>
      <NavLink to="/login" style={navLinkStyle}>
        Login
      </NavLink>
      <NavLink to="/admin" style={navLinkStyle}>
        Admin
      </NavLink>
    </center>
  );
}

export default Home;
