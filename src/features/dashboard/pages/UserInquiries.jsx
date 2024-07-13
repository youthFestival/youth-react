import { Header, Table } from "../components";

function UserInquiries() {
  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변">
        {/* <SearchBar /> */}
        {/* <Filter> */}
      </Header>

      <Table
        headerRow={[
          { name: "번호", ratio: 1 },
          { name: "문의 유형", ratio: 1 },
          { name: "문의 제목", ratio: 4 },
          { name: "작성자", ratio: 1 },
          { name: "문의 날짜", ratio: 1 },
          { name: "상태", ratio: 1 },
        ]}
      />
    </>
  );
}

export default UserInquiries;
