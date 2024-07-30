import "../styles/profile-input-field.scss"

function ProfileInputField({ label, value, setValue, name }) {

    return (<div className="profile-input-field">
        <label>{label}</label>
        <input type="text" name={name} value={value} onChange={setValue} placeholder={`${label}을 입력해주세요`}></input>
    </div>)
}

export default ProfileInputField;