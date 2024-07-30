import "../styles/inquiry-post.scss";

function InquiryPost({ nickname, date, title, content }) {
  return (
    <div className="inquiry">
      <div className="profile">
        <span className="nickname">{nickname}</span>
        <span className="date">{date}</span>
      </div>
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </div>
  );
}

export default InquiryPost;
