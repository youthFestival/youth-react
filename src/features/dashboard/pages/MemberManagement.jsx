import useFetch from "../../../hooks/useFetch";
import { Header } from "../components";
import "../styles/common.scss";
import { withParams } from "../../../utils/util";
import { useNavigate, useParams } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import TableComponent from "../components/TableComponent";
import EditProfileModal from "../components/EditProfileModal";
import { useState } from "react";
import { isVisible } from "@testing-library/user-event/dist/utils";

function MemberManagement() {
  const page = useParams()["*"] || 1;
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


  const DEFAULT_LIMIT = 15;
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL +
    "/user" +
    withParams({
      page: page - 1
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
    onClick: () => {
      setCurrentUser(user);
      setModalVisible(true);
    },
    cells: [
      { content: user?.userId, className: "" },
      {
        content: (
          <span
            className={`permission ${user?.isAdmin === "admin" ? "permission-admin" : "permission-user"
              }`}
          >
            {user.isAdmin}
          </span>
        ),
        className: "permission",
      },
      { content: user?.username, className: "name" },
      { content: user?.email, className: "email" },
      { content: user?.tel, className: "" },
    ],
  }));

  return (
    <>
      {modalVisible && <div className="user-modal-area">
        <EditProfileModal user={currentUser} setVisible={setModalVisible} />
      </div >}

      <Header title="회원 조회" subTitle="회원 관리 및 조회" />

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
