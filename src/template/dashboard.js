import React from 'react';
import './css/dashboard.css';
function Dashboard(){

    return (
        <div className="container">
            <div className="left_board">
                <div className="text_wrapper">위험도</div>
                    <div className="state_board">
                        <div className="state_header">
                            <div className="state_header_item">안전</div>
                            <div className="state_header_item">경고</div>
                            <div className="state_header_item">위험</div>
                        </div>
                        <div className="state_content">
                            <div className="state_content_item">10개</div>
                            <div className="state_content_item">3개</div>
                            <div className="state_content_item">0개</div>
                        </div>
                    </div>
                <div className="graph_board">

                </div>
            </div>
            <div className="right_board">
                <div className="online_state">
                    <div className="text_wrapper">Online</div>
                    <div className="online_state_content">
                        <div className="table_wrapper">
                            <div className="IDX_wrapper">Index</div>
                            <div className="IP_wrapper">IP</div>
                            <div className="Location_wrapper">Location</div>
                            <div className="Type_wrapper">Sensor Type</div>
                        </div>
                    </div>
                </div>
                <div className="offline_state">
                    <div className="text_wrapper">Offline</div>
                    <div className="offline_state_content">
                        <div className="table_wrapper">
                            <div className="IDX_wrapper">Index</div>
                            <div className="IP_wrapper">127.0.0.1</div>
                            <div className="Location_wrapper">공과대학 + 4층 강의실 1 + 화재 감지 센서</div>
                            <div className="Type_wrapper">Sensor Type</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard