import React, { useState } from "react";
import "../styles/registerform.css";
import {
  RegisterBtn,
  RegisterCheckbox,
  RegisterGenderBtn,
  RegisterInput,
  AddressSearchBtn,
} from "../component";

import RegisterFindUserFooter from "../../../components/footer/RegisterFindUserFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * 회원가입 정보 입력 폼 코드
 * @returns
 */
//id ,password, name, address, addressDitail, email, tel

const apiURL = process.env.REACT_APP_API_URL;

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    username: "",
    address: "",
    addressDetail: "",
    email: "",
    tel: "",
    gender: "",
    isAllowEmail: false,
  });
  const [availableId, setAvailableId] = useState('');
  const [duplicateChecked, setDuplicateChecked] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value,})
  }

  const handleAddressSelect = (selectedAddress) => {
    setFormData({...formData, address: selectedAddress});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("회원가입 시작")
    // TODO: 회원가입 API 호출
    if(!duplicateChecked || availableId !== formData.userId) {
      console.log(availableId);
      console.log(duplicateChecked);
      alert("아이디 중복 확인을 해주세요.")
      return;
    }
    console.log("통과");
    console.log(formData);
    try {
      await axios.post(`${apiURL}/auth/register`, formData);
      alert("회원가입 성공");
      navigate("/")
    } catch (error) {
      console.error(error.response.data.message);
      alert("회원가입 실패");
    }
  };

  const handleDupicateCheck = async () => {
    try {
      const response = await axios.post(`${apiURL}/auth/duplication-username`, { userId: formData.userId });
      //console.log(response.status);
      if(response.status) {
        setDuplicateChecked(true);
        setAvailableId(formData.userId);
        alert("사용 가능한 아이디입니다.")
      }
    } catch (error) {
      if(error.response.status === 409) {
        console.error(error.response.data.message);
        alert("이미 사용중인 아이디입니다.");
        setDuplicateChecked(true);
      } else {
        console.error("Error checking username duplication:", error);
      }
    }
  };

  return (
    <div className="register-write-container">
      <div className="register-header">
        <span className="register-header-youth">Youth!</span>
      </div>

      <div className="register-write-form">
        <div className="input-with-btn">
          <RegisterInput
            registerText="아이디"
            registerInputType="text"
            registerInputPlaceHolder="6~20자 영문, 숫자"
            registerInputClassName="register-id-input"
            registerInputValue={formData.userId}
            registerInputOnChange={handleChange}
            name="userId"
          />
          <button className="register-check-btn" onClick={handleDupicateCheck}>중복확인</button>
        </div>

        <RegisterInput
          registerText="비밀번호"
          registerInputType="password"
          registerInputPlaceHolder="8~12자 영문, 숫자, 특수문자"
          registerInputClassName="register-pw-input"
          registerInputValue={formData.password}
          registerInputOnChange={handleChange}
          name="password"
        />

        <RegisterInput
          registerText="비밀번호 확인"
          registerInputType="password"
          registerInputPlaceHolder="8~12자 영문, 숫자, 특수문자"
          registerInputClassName="register-pwcheck-input"
          registerInputValue={formData.passwordCheck}
          registerInputOnChange={handleChange}
          name="passwordCheck"
        />

        <RegisterGenderBtn />

        <RegisterInput
          registerText="이름"
          registerInputType="text"
          registerInputPlaceHolder="이름을 입력하세요."
          registerInputClassName="register-name-input"
          registerInputValue={formData.username}
          registerInputOnChange={handleChange}
          name="username"
        />

         <div className="input-with-btn">
            <RegisterInput
              registerText="주소"
              registerInputType="text"
              registerInputPlaceHolder="주소를 입력하세요."
              registerInputClassName="register-address-input"
              registerInputValue={formData.address}
            />
            <AddressSearchBtn onAddressSelect={handleAddressSelect} />
          </div>
       
          <RegisterInput
            registerText="상세주소"
            registerInputType="text"
            registerInputPlaceHolder="상세주소를 입력하세요."
            registerInputClassName="register-detail-address"
          />
          
        

        <div className="email-with-dropdown">
          <RegisterInput
            registerText="이메일"
            registerInputType="email"
            registerInputPlaceHolder="이메일을 입력하세요."
            registerInputClassName="register-email-input"
            registerInputValue={formData.email}
            registerInputOnChange={handleChange}
            name="email"
          />
          <select name="" id="email-dropdown" 
              onChange={(e) =>
              setFormData({ ...formData, email: `${formData.email.split('@')[0]}@${e.target.value}` })}>
            <option value="직접입력" className="email-option">
              직접입력
            </option>
            <option value="naver.com" className="email-option">
              naver.com
            </option>
            <option value="hanmail.net" className="email-option">
              hanmail.net
            </option>
            <option value="gmail.com" className="email-option">
              gmail.com
            </option>
            <option value="nate.com" className="email-option">
              nate.com
            </option>
          </select>
        </div>

        <div className="input-with-btn">
          <RegisterInput
            registerText="휴대폰"
            registerInputType="tel"
            registerInputPlaceHolder="휴대폰 번호를 입력하세요."
            registerInputClassName="register-phone-input"
            registerInputValue={formData.tel}
            registerInputOnChange={handleChange}
            name="tel"
          />
          <button className="register-check-btn">인증번호받기</button>
        </div>

        <br />

        <RegisterCheckbox
          agreementType="checkbox"
          agreementText="SMS, 이메일로 상품 및 이벤트 정보를 받겠습니다.(선택)"
        />

        <RegisterCheckbox
          agreementType="checkbox"
          agreementText="14세 미만입니다."
        />

        <span className="register-age-limit-span">
          만 14세 미만 회원은 법정대리인(부모님)동의를 받은 경우만 회원가입이
          가능합니다.
        </span>

        <RegisterBtn registerBtnText="회원가입" registerOnClick={handleSubmit}/>
      </div>

      <RegisterFindUserFooter/>
    </div>
  );
};

export default RegisterForm;