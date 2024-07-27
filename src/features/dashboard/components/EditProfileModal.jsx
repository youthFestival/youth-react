import axios from "axios";
import "../styles/edit-profile-modal.scss";
import ProfileInputField from "./ProfileInputField";

function EditProfileModal({ user, setVisible }) {


    // 수정하기 버튼
    const handleEditProfile = async () => {
        try {
            const response = await axios.put(process.env.REACT_APP_API_URL + `/user/${user?.id}`, {
                userId: user.userId,
                username: user.username,
                email: user.email,
                tel: user.tel,
                address: user.address,
                locality: user.locality
            }, { withCredentials: true });

            alert(response?.data?.message || "회원 수정 완료");

            //reload
            window.location.reload();

        } catch (e) {
            alert(e?.response.data.message || "회원 수정 실패");
            console.log(e);
        }
    };


    return (<div className="edit-profile-modal">
        <div className="modal-header">
            <span className="title">정보 수정</span>
            <span class="material-symbols-outlined exit" onClick={(e) => { setVisible(prev => !prev) }}>
                close
            </span>
        </div>
        <div className="body">
            <ProfileInputField label={"아이디"} value={user?.userId} setValue={() => { }} />
            <ProfileInputField label={"이름"} value={user?.username} setValue={() => { }} />
            {/* <ProfileInputField label={"비밀번호" value={}   } setValue={() => { }} /> */}
            <ProfileInputField label={"이메일"} value={user?.email} setValue={() => { }} />
            <ProfileInputField label={"전화번호"} value={user?.tel} setValue={() => { }} />
            <ProfileInputField label={"주소"} value={user?.address} setValue={() => { }} />
            <ProfileInputField label={"지역"} value={user?.locality} setValue={() => { }} />
            {/* ... 아이디 이름 비밀번호 이메일 전화번호 주소*/}
        </div>
        <button onClick={handleEditProfile}>회원 수정</button>
    </div>)
}

export default EditProfileModal;