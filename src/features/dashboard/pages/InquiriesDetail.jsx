import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, InquiryPost } from "../components";
import "../styles/inquiries-detail.scss";
import useFetch from "../../../hooks/useFetch";
import { formatDate } from "../../../utils/util";
import PostEditor from "../components/PostEditor";
import axios from "axios";

function InquiriesDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    process.env.REACT_APP_API_URL + `/inquiry/detail/${id}`
  );


  const [isFestivalInquiry, setIsFestivalInquiry] = useState(false);


  useEffect(() => {
    if (data) {
      setIsFestivalInquiry(data.inquiry.category === "페스티벌");
      console.log(data);
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
              <span>{data?.inquiry.id}</span>
            </li>
            <li>
              <label>문의 유형</label>
              <span>{data?.inquiry.category}</span>
            </li>
            {isFestivalInquiry && (
              <li>
                <label>페스티벌 이름</label>
                <span>{data?.festivalName}</span>
              </li>
            )}
            <li>
              <label>유저 아이디</label>
              <span>{data?.inquiry.author?.userId}</span>
            </li>
            <li>
              <label>유저 UID</label>
              <span>{data?.inquiry.author?.id}</span>
            </li>
            <li>
              <label>접수 날짜</label>
              <span>{formatDate(data?.inquiry.updatedAt)}</span>
            </li>
            <li>
              <label>상태</label>
              <span>{data?.inquiry.status}</span>
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
              nickname={data?.inquiry.author?.userId}
              date={formatDate(data?.inquiry.updatedAt)}
              title={data?.inquiry.title}
              content={data?.inquiry.content}
            />

            <hr></hr>
            {data.inquiry?.reply ? (
              < InquiryPost
                nickname={data?.inquiry?.reply.author?.userId}
                date={formatDate(data?.inquiry?.reply.updatedAt)}
                title={data?.inquiry?.reply.title}
                content={data?.inquiry?.reply.content}
              />)
              :
              <PostEditor replyTo={id} festivalId={data.inquiry?.festivalId} />

            }
          </section>
        </main>
      )}
    </div>
  );
}

export default InquiriesDetail;
