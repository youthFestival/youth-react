import "../styles/header.scss";

function Header({ title, subTitle }) {
  return (
    // 상단헤더 영역
    <div className="header">
      <div className="nav">
        {/* 서브 타이틀 */}
        <span className="subTitle">{subTitle}</span>
        {/* 상단 메뉴바 영역 */}
        {/* 메뉴바 밑 검색 창, 필터 영역 */}
        {/* <Navbar> */}
      </div>
      {/* 메뉴 제목 */}
      <span className="title">{title}</span>
    </div>
  );
}

export default Header;
