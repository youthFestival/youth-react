import axios from "axios";
import "../styles/edit-profile-modal.scss";
import ProfileInputField from "./ProfileInputField";
import { useState } from "react";

function EditProfileModal({ user, setVisible }) {
    const [state, setState] = useState({
        userId: user?.userId,
        username: user?.username,
        password: null,
        email: user?.email,
        tel: user?.tel,
        address: user?.address,
        locality: user?.locality
    });

    // 수정하기 버튼
    const handleEditProfile = async () => {
        try {

            console.log({
                userId: state.userId,
                username: state.username,
                email: state.email,
                password: state.password?.trim() === "" ? null : state.password,
                tel: state.tel,
                address: state.address,
                locality: state.locality
            });

            const response = await axios.put(process.env.REACT_APP_API_URL + `/user/${user?.id}`, {
                userId: state.userId,
                username: state.username,
                email: state.email,
                password: state.password?.trim() === "" ? null : state.password,
                tel: state.tel,
                address: state.address,
                locality: state.locality
            }, { withCredentials: true });

            alert(response?.data?.message || "회원 수정 완료");

            //reload
            window.location.reload();

        } catch (e) {
            alert(e?.response?.data.message || "회원 수정 실패");
            console.log(e);
        }
    };

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    }


    return (<div className="edit-profile-modal">
        <div className="modal-header">
            <span className="title">정보 수정</span>
            <span class="material-symbols-outlined exit" onClick={(e) => { setVisible(prev => !prev) }}>
                close
            </span>
        </div>
        <div className="body">
            <ProfileInputField label={"아이디"} value={state.userId} setValue={onChangeInput} name={"userId"} />
            <ProfileInputField label={"이름"} value={state.username} setValue={onChangeInput} name={"username"} />
            <ProfileInputField label={"비밀번호"} value={state.password} setValue={onChangeInput} name={"password"} />
            <ProfileInputField label={"이메일"} value={state.email} setValue={onChangeInput} name={"email"} />
            <ProfileInputField label={"전화번호"} value={state.tel} setValue={onChangeInput} name={"tel"} />
            <ProfileInputField label={"주소"} value={state.address} setValue={onChangeInput} name={"address"} />
            <ProfileInputField label={"지역"} value={state.locality} setValue={onChangeInput} name={"locality"} />
            {/* ... 아이디 이름 비밀번호 이메일 전화번호 주소*/}
        </div>
        <button onClick={handleEditProfile}>회원 수정</button>
    </div>)
}

export default EditProfileModal;