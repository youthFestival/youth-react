import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, InquiryPost } from "../components";
import "../styles/inquiries-detail.scss";
import useFetch from "../../../hooks/useFetch";
import { formatDate } from "../../../utils/util";

function InquiriesDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL + `/inquiries/${id}`
  );

  const [isFestivalInquiry, setIsFestivalInquiry] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFestivalInquiry(data.userInquiries.category === "페스티벌");
    }
  }, [data]);

  return (
    <div className="inquiries-detail">
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변" />

      {data && (
        <main>
          <ol className="info-card">
            <li>
              <label>문의 접수 번호</label>
              <span>{data.userInquiries.id}</span>
            </li>
            <li>
              <label>문의 유형</label>
              <span>{data.userInquiries.category}</span>
            </li>
            {isFestivalInquiry && (
              <li>
                <label>페스티벌 이름</label>
                <span>{data.festivalName}</span>
              </li>
            )}
            <li>
              <label>유저 아이디</label>
              <span>{data.userInquiries.userAlias}</span>
            </li>
            <li>
              <label>유저 UID</label>
              <span>{"추가해야함."}</span>
            </li>
            <li>
              <label>접수 날짜</label>
              <span>{formatDate(data.userInquiries.updatedAt)}</span>
            </li>
            <li>
              <label>상태</label>
              <span>{data.userInquiries.status}</span>
            </li>
          </ol>

          <section>
            <div className="top-header" onClick={(e) => window.history.back()}>
              <span className="material-symbols-outlined">
                keyboard_arrow_left
              </span>
              <span className="sub-title">전체 문의 내역 보기</span>
            </div>
            <div>{/* <Profile user = {user}/>  */}</div>

            <InquiryPost
              nickname={data.userInquiries.userAlias}
              date={formatDate(data.userInquiries.updatedAt)}
              title={data.userInquiries.title}
              content={data.userInquiries.content}
            />

            <hr></hr>

            <InquiryPost
              nickname={data.replyInquiries.userAlias}
              date={formatDate(data.replyInquiries.updatedAt)}
              title={data.replyInquiries.title}
              content={data.replyInquiries.content}
            />
          </section>
        </main>
      )}
    </div>
  );
}

export default InquiriesDetail;
