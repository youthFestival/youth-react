import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import "../styles/inquiries-detail.scss";
function InquiriesDetail() {
  const { id } = useParams();

  useEffect(() => { });
  return (
    <div className="inquiries-detail">
      <Header title="고객 문의 내역" subTitle="고객 문의 및 답변" />

      <main>
        <ol className="info-card">
          <li>
            <label>문의 접수 번호</label>
            <span>#10101010</span>
          </li>
          <li>
            <label>페스티벌 이름</label>
            <span>#10101010</span>
          </li>
          <li>
            <label>유저 아이디</label>
            <span>seo0jjjjj</span>
          </li>
          <li>
            <label>유저 UID</label>
            <span>#123123123</span>
          </li>
          <li>
            <label>접수 날짜</label>
            <span>2024년 05월 4일 18:18</span>
          </li>
          <li>
            <label>상태</label>
            <span>해결됨.</span>
          </li>
        </ol>

        <div className="content">
          <div className="top-header">
            <span className="material-symbols-outlined">
              keyboard_arrow_left
            </span>
            <span className="sub-title">전체 문의 내역 보기</span>
          </div>
          <div>{/* <Profile user = {user}/>  */}</div>

          <div className="inquiries-content">
            <div className="profile">
              <span className="nickname">으에에엥</span>
              <span className="date">2024년 05월 4일 18:18</span>
            </div>
            <span className="title">
              I was unfairly penalized due to the updated Vanguard.
            </span>
            <span className="content">
              In other words, "cross-origin" means that the two origins trying
              to share resources are different from each other. Setting up CORS
              (Cross-Origin Resource Sharing) allows resource sharing between
              servers with different origins. While the SOP (Same-Origin Policy)
              blocks resource requests and responses when the origins are
              different, CORS, on the other hand, is a policy that allows
              resource requests and responses even if the origins are different.
              Hence, the errors we encounter usually suggest configuring
              something to enable CORS. The header Access-Control-Allow-Origin,
              used in the solutions that will be discussed later, can be
              understood as "access control for allowed origins." Check the
              example below to see which URLs conform to the SOP. In the past,
              frontend and backend were configured together, allowing all
              processing to happen within the same domain. Therefore, sending
              requests to different origins was seen as suspicious behavior.
              However, over time, it became common to call APIs directly from
              the client. Usually, the client and the API reside in different
              domains. Hence, the CORS policy was established. It allows
              specifying permitted origins on the server so that requests and
              responses can be exchanged even if the origins are different.
            </span>
          </div>
          <hr />

          <div>{/* <Profile user = {user}/>  */}</div>
          <div>content</div>
        </div>
      </main>
    </div>
  );
}

export default InquiriesDetail;
