import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import "../styles/user-inquiries.css";

function UserInquiries() {
  const { data, loading, error } = useFetch(process.env.REACT_APP_API_URL + "/inquiries");
  console.log(data);

  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변">
        {/* <SearchBar /> */}
        {/* <Filter> */}
      </Header>

      <table className="inquiries-table">
        {/* 제목 부분 */}
        <tr className="row-flex">
          <th className="col">번호 </th>
          <th className="col">문의 유형</th>
          <th className="col title">문의 제목</th>
          <th className="col">작성자</th>
          <th className="col">문의 날짜</th>
          <th className="col">상태</th>
        </tr>

        {/* 내용 부분 */}

        {data?.inquiries.map((inquiry) => {
          return (
            <tr className="row-flex">
              <td className="col">{inquiry.id}</td>
              {/* 페스티벌의 경우, 값에 따라 스타일을 다르게 줘야함. */}
              <td className={`col category ${inquiry.category === "페스티벌" ? "col-festival" : "col-account"}`}><span>{inquiry.category}</span></td>
              <td className="col title">{inquiry.title}</td>
              <td className="col">{inquiry.userAlias}</td>
              <td className="col">{inquiry.updatedAt}</td>
              <td className="col status">{inquiry.status}</td>
            </tr>
          );
        })}
      </table >
    </>
  );
}

export default UserInquiries;
