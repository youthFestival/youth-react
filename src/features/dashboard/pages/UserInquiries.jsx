import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import "../styles/common.scss";
import { useNavigate, useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import TableComponent from "../components/TableComponent";

function UserInquiries() {
  const page = useParams()["*"] || 1;
  const navigate = useNavigate();
  const DEFAULT_LIMIT = 15;
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL +
    "/inquiry", { param: { page } });

  const headers = [
    { content: "번호", className: "header-number" },
    { content: "문의 유형", className: "header-type" },
    { content: "문의 제목", className: "header-title" },
    { content: "작성자", className: "header-author" },
    { content: "문의 날짜", className: "header-date" },
    { content: "상태", className: "header-status" }
  ];
  const rows = data?.inquiries.map((inquiry) => {
    const date = new Date(inquiry.updatedAt);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`;

    return ({
      onClick: () => navigate("detail/" + inquiry.id),
      cells: [
        { content: inquiry.id, className: "" },
        {
          content: (
            <span
              className={`category ${inquiry.festivalId != null ? "col-festival" : "col-account"
                }`}
            >
              {inquiry.festivalId === null ? "계정" : "페스티벌"}
            </span>
          ),
          className: "category",
        },
        { content: inquiry.title, className: "title" },
        { content: inquiry.userAlias, className: "" },
        { content: formattedDate, className: "" },
        { content: inquiry.reply === null ? "접수중" : "답변완료", className: "status" },
      ],
    })
  });

  return (
    <>
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변" />
      <TableComponent
        headers={headers}
        rows={rows}
        loading={loading}
        error={error}
        emptyMessage="문의 내역이 없습니다."
      />
      <PaginationBar
        numOfCurrentData={data?.inquiries.length}
        limit={DEFAULT_LIMIT}
      />
    </>
  );
}

export default UserInquiries;
