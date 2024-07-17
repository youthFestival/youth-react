import React, {useState} from 'react'
import Item from './SettingContentItem'
import IconNotification from '../../icons/notification-icon.svg'
import IconSms from '../../icons/sms-icon.svg'

import '../../styles/content-setting.css'

const SettingContent = () => {
    const [messageTranslation, setMessageTranslation] = useState(false);
    const [notificationSound, setNotificationSound] = useState(true);
    const [smsOpt, setSmsOpt] = useState(false);
    const [emailOpt, setEmailOpt] = useState(false);
    return (
        <div className='setting-content-container'>
            <div className='title'>상담환경</div>
            <Item
                imgSrc={IconNotification}
                text={'메세지 번역 표시'}
                toggle={messageTranslation}
                onToggle={() => setMessageTranslation(!messageTranslation)}/>
            <Item
                imgSrc={IconSms}
                text={'알림음'}
                toggle={notificationSound}
                onToggle={() => setNotificationSound(!notificationSound)}/>
            <hr />
            <div className='title'>광고 수신 설정</div>
            <Item
                imgSrc={IconNotification}
                text={'문자 수신 거부'}
                toggle={smsOpt}
                onToggle={() => setSmsOpt(!smsOpt)}/>
            <Item
                imgSrc={IconSms}
                text={'이메일 수신 거부'}
                toggle={emailOpt}
                onToggle={() => setEmailOpt(!emailOpt)}/>
        </div>
    )
}

export default SettingContent