import "../styles/header.css";

function Header({ title, subTitle }) {
  return (
    <div className="header">
      <div className="nav">
        <span className="subTitle">{subTitle}</span>
        {/* <Navbar> */}
      </div>
      <span className="title">{title}</span>
    </div>
  );
}

export default Header;
