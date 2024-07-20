import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import "../styles/common.scss";
import { withParams } from "../../../utils/util";
import { useNavigate, useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import TableComponent from "../components/TableComponent";

function MemberManagement() {
  const page = useParams()["*"] || 1;
  const navigate = useNavigate();
  const DEFAULT_LIMIT = 15;
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL +
    "/users" +
    withParams({
      limit: DEFAULT_LIMIT,
      offset: (page - 1) * DEFAULT_LIMIT + 1,
    })
  );

  const headers = [
    { content: "아이디", className: "header-id" },
    { content: "등급", className: "header-grade" },
    { content: "이름", className: "header-name" },
    { content: "이메일", className: "header-email" },
    { content: "전화번호", className: "header-phone" }
  ];

  const rows = data?.users.map((user) => ({
    onClick: () => alert("유저 클릭됨. 모달창으로 대체될 예정"),
    cells: [
      { content: user.userId, className: "" },
      {
        content: (
          <span
            className={`permission ${user.isAdmin === "admin" ? "permission-admin" : "permission-user"
              }`}
          >
            {user.isAdmin}
          </span>
        ),
        className: "permission",
      },
      { content: user.username, className: "name" },
      { content: user.email, className: "email" },
      { content: user.tel, className: "" },
    ],
  }));

  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변" />
      <TableComponent
        headers={headers}
        rows={rows}
        loading={loading}
        error={error}
        emptyMessage="사용자가 없습니다."
      />
      <PaginationBar
        numOfCurrentData={data?.users.length}
        limit={DEFAULT_LIMIT}
      />
    </>
  );
}

export default MemberManagement;
