import "../styles/edit-profile-modal.scss";
import ProfileInputField from "./ProfileInputField";

function EditProfileModal() {
    return (<div className="edit-profile-modal">
        <div className="header">
            <span className="title">정보 수정</span>
            <span class="material-symbols-outlined exit">
                close
            </span>
        </div>
        <div className="body">
            <ProfileInputField value={"아이디"} setValue={() => { }} />
            <ProfileInputField value={"이름"} setValue={() => { }} />
            <ProfileInputField value={"비밀번호"} setValue={() => { }} />
            <ProfileInputField value={"이메일"} setValue={() => { }} />
            <ProfileInputField value={"전화번호"} setValue={() => { }} />
            <ProfileInputField value={"주소"} setValue={() => { }} />
            {/* ... 아이디 이름 비밀번호 이메일 전화번호 주소*/}
        </div>
        <button>회원 수정</button>
    </div>)
}

export default EditProfileModal;