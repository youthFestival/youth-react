import "../styles/profile-input-field.scss"

function ProfileInputField({ value, setValue }) {

    return (<div className="profile-input-field">
        <label>{value}</label>
        <input type="text" value={value} onChange={setValue}></input>
    </div>)
}

export default ProfileInputField;