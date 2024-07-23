import React from 'react';
import TopTalkAreaList from './TopTalkAreaList';
import {AuthContext} from '../../../contexts/AuthContext'
import './top-talk-area.scss';

const TopTalkArea = () => {
    const { user } = React.useContext(AuthContext)
    return (
        <div id="topTalkArea" className="talk_area" aria-hidden="false">
            <div className="arrow-up"></div>
            <div className="layer_box">
                <div className="box_content">
                    <TopTalkAreaList username={user.user.username}/>
                    <TopTalkAreaList username={user.user.username}/>
                    <TopTalkAreaList username={user.user.username}/>
                    <TopTalkAreaList username={user.user.username}/>
                </div>
            </div>
        </div>
    );
};

export default TopTalkArea;
