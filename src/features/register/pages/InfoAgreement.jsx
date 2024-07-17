import React from 'react';
import {
    RegisterBtn,
    RegisterCheckbox
} from '../index.js';
import '../styles/infoagreement.css'

const InfoAgreement = () => {
    return (
        <div className='info-agreement-container'>
            
                <div className='agreement-header'>
                    <span className='agreement-header-youth'>Youth!</span>
                </div>
                <div className='info-agreement-form'>
                    <RegisterCheckbox 
                            agreementType='checkbox'
                            agreementText='전체 약관 동의'
                    />
                    <RegisterCheckbox 
                            agreementType='checkbox'
                            agreementText='[필수]개인 정보 수집 동의'
                    />
                    <p className='register-agreement-notice'>
                        Youth!는 서비스 제공을 위하여 아래와 같이 회원의 개인정보를 수집, 활용합니다.<br/><br/>

                        * 개인정보 수집∙이용에 대한 동의를 거부할 수 있으며, 거부할 경우 서비스 이용이 제한됩니다.<br/>
                        서비스 이용 과정에서 부정이용방지, 비인가 사용 방지, 통계 및 서비스 품질 향상 목적으로 단말기<br/>
                        정보(OS, 모델명 등), IP주소, 쿠키, 서비스 이용 기록(방문일시, 접속기록) 정보가 자동으로 생성되<br/>
                        어 수집될 수 있습니다. 자동으로 생성되어 수집된 정보는 서비스 제공 기간동안 보유 및 이용하며,<br/>
                        수집 및 이용목적의 달성 시 파기됩니다.
                    </p>

                    <RegisterCheckbox 
                            agreementType='checkbox'
                            agreementText='[선택]마케팅 수신 동의'
                    />
                    <p className='register-agreement-notice'>
                        ㈜Youth! 마케팅 수신 동의 약관<br/><br/>

                        [제 1장 총칙]<br/>
                        
                        · 1조 목적<br/>
                        
                           <span className='register-notice-span'>본 약관은 회원(Youth! 서비스 약관에 동의한 마케팅 수신 동의를 말하며, 이하 “회원”)이</span><br/>
                           <span className='register-notice-span'>주식회사 Youth!(이하 “회사”)가 제공하는 서비스(이하 “서비스”)를 이용함에 있어 회사와 회원의 권리/의무 및 책임사항</span><br/>
                           <span className='register-notice-span'>을 규정함을 목적으로 합니다.</span>
                        
                        <br/>
                        · 제2조 이용약관의 효력 및 변경
                        <br/>
                        <span className='register-notice-span'>
                        ① 본 약관은 서비스를 신청한 고객이 동의하고 회사가</span>
                    </p>
 
                    <br/>

                    <RegisterBtn
                        registerBtnText='다음단계'
                        registerNavLink='/register/registerform'
                    />
            </div>
        </div>
    );
};

export default InfoAgreement;