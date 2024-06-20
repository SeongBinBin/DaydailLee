import React, {useState} from "react";
import './Header.css'
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, AiOutlineLock, } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Register from "../../Pages/Register/Register";

function Header() {
    const [clickList, setClickList] = useState(false)
    const [clickUser, setClickUser] = useState(false)

    function listClick(){
        setClickList(!clickList)
    }

    function userClick(){
        setClickUser(!clickUser)
    }

    return(
        <div className="header_container">
            <div className="header_area">
                {!clickList ? (
                    <AiOutlineMenu className="header_icon" onClick={listClick}/>
                ): (
                    <AiOutlineClose className="header_icon" onClick={listClick}/>
                )}
                <p className="header_logo">DaydailLee</p>
                <div className="header_icon_group">
                    <AiOutlineUser className="header_icon" onClick={userClick}/>
                    <FiSearch className="header_icon"/>
                </div>
            </div>
            {clickList && (
                <div className="list_area">
                    <span>리스트 테스트</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            )}

            {clickUser && (
                <div className="user_area">
                    <div className="login_area">
                        <span className="login_title">DaydailLee Login</span>
                        <div className="login_input_area">
                            <AiOutlineUser className="login_icon"/>
                            <input 
                                placeholder="아이디를 입력해주세요."
                            />
                        </div>
                        <div className="login_input_area">
                            <AiOutlineLock className="login_icon"/>
                            <input 
                                placeholder="비밀번호를 입력해주세요."
                            />
                        </div>
                        <button className="login_btn">LOGIN</button>
                        <div className="register_area">
                            <div>
                                <Link to='/register' style={{textDecoration: 'none', color: '#000'}}><span>회원가입</span></Link>
                            </div>
                            <div>
                                <span>아이디 / 비밀번호 찾기</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Header;