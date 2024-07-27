import "../styles/profile-input-field.scss"

function ProfileInputField({ label, value, setValue }) {

    return (<div className="profile-input-field">
        <label>{label}</label>
        <input type="text" value={value} onChange={setValue} placeholder={`${label}을 입력해주세요`}></input>
    </div>)
}

export default ProfileInputField;