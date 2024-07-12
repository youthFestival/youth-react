import Header from "./Header";
import Table from "./Table";

function UserInquiries() {
  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변">
        {/* <SearchBar /> */}
        {/* <Filter> */}
      </Header>

      <Table
        headerRow={
          ("번호", "문의 유형", "문의 제목", "작성자", "문의 날짜", "상태")
        }
      />
    </>
  );
}

export default UserInquiries;
