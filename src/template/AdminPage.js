import React,{useState} from 'react';
import './css/admin.css'
function AdminPage(){
    return (
            <div className="container">
                <div className="Menu">
                    <div className="Menu_form">
                        <div className="Menu_text_Index">Machine</div>
                        <div className="Menu_text_Area">
                            <a href="#" className="Menu_text">Loc 1</a>
                            <a href="#" className="Menu_text">Loc 2</a>
                            <a href="#" className="Menu_text">Loc 3</a>
                        </div>
                    </div>
                    <div className="Menu_form">
                        <div className="Menu_text_Index">User</div>
                        <div className="Menu_text_Area">
                            <a href="#" className="Menu_text">관제팀</a>
                            <a href="#" className="Menu_text">현장팀</a>
                            <a href="#" className="Menu_text">관리자 메뉴</a>
                        </div>
                    </div>
                </div>
                <div className="Content_board">

                </div>
            </div>
    )
}

export default AdminPage