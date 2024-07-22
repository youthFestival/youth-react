import React from 'react';
import './top-talk-area.scss';

const TopTalkArea = () => {
    return (
        <div id="topTalkArea" className="talk_area" aria-hidden="false">
            <div className="arrow-up"></div>
            <div className="layer_box">
                <div className="box_content">
                    <p>여기에 표시할 내용을 작성하세요.</p>
                    <p>예를 들어, 공지사항이나 대화 내용을 넣을 수 있습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default TopTalkArea;
