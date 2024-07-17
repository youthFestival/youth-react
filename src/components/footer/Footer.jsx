import React from "react";
import './footer.css';

const Footer = () => {

    return (
        <div className="footer-footer">
            <div className="ftop-container">
                <div className="fleft-container">
                    <strong className="fyouth">(주)Youth!</strong>
                    <p className="ftop">
                        주소 천안 동남구 대흥로 255 화일빌딩 3층<br></br>
                        사업자등록번호 000-00-00000 사업자정보확인<br></br>
                        통신판매업신고 0000-천안동남-00000<br></br>
                        관광사업증 등록번호 : 제0000-00호<br></br>
                        호스팅서비스제공자 (주)Youth!｜대표이사 홍길동
                    </p>
                </div>
                <div className="fright-container">
                    <strong className="fyouth">전자금융거래 분쟁처리 담당</strong>
                    <p className="ftop">
                        팩스 00-000-0000｜이메일 intersolution@youth.com<br></br>
                        개인정보보호책임자 cpo@youth.com
                    </p>
                </div>
            </div>
            <div className="fbottom-container">
                <p className="fbottom">
                    (주)유스는 축제주최사가 제공하는 개별 티켓 등에 대하여 통신판매중개자의 지위를 가지며, 해당티켓, 티켓정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.<br></br>
                    예매자는 본 안내페이지의 모든 내용을 숙지 및 동의한 것으로 간주합니다.<br></br>
                    관람연령 / 티켓수령 / 공연 관람 안내 미숙지로 인한 책임은 관람자 본인에게 있으니 각별히 유의하시기 바랍니다.<br></br>
                    Copyright ⓒ InterparkTriple Corp. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer;