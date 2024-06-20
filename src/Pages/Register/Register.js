import React from "react";
import './Register.css'
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div className="register_container">
            <div className="register_box">
                <span>회원가입</span>
                <div className="register_input_area">
                    <span>NAME</span>
                    <input
                        placeholder="이름 입력해주세요."
                    />
                </div>
                <div className="register_input_area">
                    <span>Phone</span>
                    <input
                        placeholder="전화번호를 입력해주세요."
                    />
                </div>
                <div className="register_input_area">
                    <span>ID</span>
                    <input
                        placeholder="아이디를 입력해주세요."
                    />
                </div>
                <div className="register_input_area">
                    <span>PW</span>
                    <input
                        placeholder="비밀번호를 입력해주세요."
                    />
                </div>
                <div className="register_input_area">
                    <span>PW Check</span>
                    <input
                        placeholder="비밀번호를 다시 입력해주세요."
                    />
                </div>
                <Link to='/'><button>회원가입 완료</button></Link>
            </div>
        </div>
    )
}
export default Register