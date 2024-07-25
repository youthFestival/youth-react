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

/**
 * 회원가입 정보 입력 폼 코드
 * @returns
 */
const RegisterForm = () => {
  const [address, setAddress] = useState("");

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress);
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
            // registerInputOnChange={""}
          />
          <button className="register-check-btn">중복확인</button>
        </div>

        <RegisterInput
          registerText="비밀번호"
          registerInputType="password"
          registerInputPlaceHolder="8~12자 영문, 숫자, 특수문자"
          registerInputClassName="register-pw-input"
          // registerInputOnChange={""}
        />

        <RegisterInput
          registerText="비밀번호 확인"
          registerInputType="password"
          registerInputPlaceHolder="8~12자 영문, 숫자, 특수문자"
          registerInputClassName="register-pwcheck-input"
          // registerInputOnChange={""}
        />

        <RegisterGenderBtn />

        <RegisterInput
          registerText="이름"
          registerInputType="text"
          registerInputPlaceHolder="이름을 입력하세요."
          registerInputClassName="register-name-input"
          // registerInputOnChange={""}
        />

         <div className="input-with-btn">
            <RegisterInput
              registerText="주소"
              registerInputType="text"
              registerInputPlaceHolder="주소를 입력하세요."
              registerInputClassName="register-address-input"
              registerInputValue={address}
              registerInputOnChange={(e) => setAddress(e.target.value)}
            />
            <AddressSearchBtn onAddressSelect={handleAddressSelect} />
          </div>
       
          <RegisterInput
            registerText="상세주소"
            registerInputType="text"
            registerInputPlaceHolder="상세주소를 입력하세요."
            registerInputClassName="register-detail-address"
            // registerInputOnChange={""}
          />
          
        

        <div className="email-with-dropdown">
          <RegisterInput
            registerText="이메일"
            registerInputType="email"
            registerInputPlaceHolder="이메일을 입력하세요."
            registerInputClassName="register-email-input"
            // registerInputOnChange={""}
          />
          <select name="" id="email-dropdown">
            <option value="직접입력" className="email-option">
              직접입력
            </option>
            <option value="@naver.com" className="email-option">
              @naver.com
            </option>
            <option value="@hanmail.net" className="email-option">
              @hanmail.net
            </option>
            <option value="@gmail.com" className="email-option">
              @gmail.com
            </option>
            <option value="@nate.com" className="email-option">
              @nate.com
            </option>
          </select>
        </div>

        <div className="input-with-btn">
          <RegisterInput
            registerText="휴대폰"
            registerInputType="tel"
            registerInputPlaceHolder="휴대폰 번호를 입력하세요."
            registerInputClassName="register-phone-input"
            // registerInputOnChange={""}
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

        <RegisterBtn registerBtnText="가입완료" />
      </div>

      <RegisterFindUserFooter/>
    </div>
  );
};

export default RegisterForm;