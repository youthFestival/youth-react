import { Header } from "../components";
import "../styles/user-inquiries.css";

function UserInquiries() {
  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변">
        {/* <SearchBar /> */}
        {/* <Filter> */}
      </Header>

      <table>
        {/* 제목 부분 */}
        <tr>
          <th>
            <td >번호 </td>
            <td>문의 유형</td>
            <td>문의 제목</td>
            <td>작성자</td>
            <td>문의 날짜</td>
            <td>상태</td>
          </th>
        </tr>

        {/* 내용 부분 */}
        <tr>
          <td></td>
        </tr>
      </table>
    </>
  );
}

export default UserInquiries;
