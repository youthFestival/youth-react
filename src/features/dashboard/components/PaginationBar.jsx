// 페이징 관리하는 컴포넌트

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/pagination-bar.scss";

function PaginationBar({ numOfCurrentData, limit = 15 }) {
  const [page, setPage] = useState(useParams()["*"] || 1);

  const navigiate = useNavigate();
  const hasPreviousPage = page > 1;
  const hasNextPage = numOfCurrentData === limit;

  // 페이지가 바뀌면 엔드포인트로 이동
  useEffect(() => {
    navigiate("./" + page);
  }, [page, navigiate]);

  return (
    <ol className="pagination">
      <span
        class={`ico material-symbols-outlined ${
          hasPreviousPage ? "" : "disable"
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
        class={`ico material-symbols-outlined ${hasNextPage ? "" : "disable"}`}
        onClick={(e) => setPage(+page + 1)}
      >
        keyboard_arrow_right
      </span>
    </ol>
  );
}

export default PaginationBar;
