import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import "../styles/user-inquiries.css";
import { withParams } from "../../../utils/util";
import { useEffect, useState } from "react";

function UserInquiries() {
  let { "*": paramPage } = useParams();

  const [page, setPage] = useState(paramPage);

  if (page === "") {
    setPage(1);
  }

  useEffect(() => {
    navigiate("./" + page);
  }, [page]);

  const DEFAULT_LIMIT = 15;
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL +
    "/inquiries" +
    withParams({
      limit: DEFAULT_LIMIT,
      offset: (page - 1) * DEFAULT_LIMIT + 1,
    })
  );
  const navigiate = useNavigate();

  const hasNextPage = data?.inquiries?.length === DEFAULT_LIMIT;
  const hasPreviousPage = page > 1;

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
        {
          // 로딩 중일 경우 "로딩중..." 출력
          loading && (
            <tr className="row-flex">
              <td className="col" colSpan="6">
                로딩중...
              </td>
            </tr>
          )
        }
        {
          // 에러 발생 시 "에러 발생" 출력
          error && (
            <tr className="row-flex">
              <td className="col" colSpan="6">
                에러 {error} 발생
              </td>
            </tr>
          )
        }

        {/* 내용 부분 */}
        {
          // 데이터가 없을 경우 "문의 내역이 없습니다." 출력
          data?.inquiries?.length === 0 ? (
            <tr className="row-flex">
              <td className="col" colSpan="6">
                문의 내역이 없습니다.
              </td>
            </tr>
          ) : (
            // 데이터가 있을 경우, 데이터를 출력
            data?.inquiries.map((inquiry) => (
              <tr
                className="row-flex"
                onClick={(e) => {
                  navigiate("detail/" + inquiry.id);
                }}
              >
                <td className="col"> {inquiry.id}</td>
                {/* 페스티벌의 경우, 값에 따라 스타일을 다르게 줘야함. */}
                <td
                  className={`col category ${inquiry.category === "페스티벌"
                      ? "col-festival"
                      : "col-account"
                    }`}
                >
                  <span>{inquiry.category}</span>
                </td>
                <td className="col title">{inquiry.title}</td>
                <td className="col">{inquiry.userAlias}</td>
                <td className="col">{inquiry.updatedAt}</td>
                <td className="col status">{inquiry.status}</td>
              </tr>
            ))
          )
        }
      </table>
      {/* 페이지 이동 */}
      <ol className="pagination">
        <span
          class={`ico material-symbols-outlined ${hasPreviousPage ? "" : "disable"
            }`}
          onClick={(e) => {
            setPage(page - 1);
          }}
        >
          keyboard_arrow_left
        </span>

        {hasPreviousPage && (
          <>
            <li className="previous" onClick={(e) => setPage(page - 1)}>
              {+page - 1}
            </li>
          </>
        )}
        <li className="current-page">{page}</li>
        {hasNextPage && (
          <>
            <li onClick={(e) => setPage(+page + 1)}>{+page + 1}</li>
          </>
        )}
        <span
          class={`ico material-symbols-outlined ${hasNextPage ? "" : "disable"
            }`}
          onClick={(e) => setPage(+page + 1)}
        >
          keyboard_arrow_right
        </span>
      </ol>
    </>
  );
}

export default UserInquiries;
