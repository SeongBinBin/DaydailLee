import React, {useState, useEffect} from "react";
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, AiOutlineLock, } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

function Header() {
    const [clickList, setClickList] = useState(false);
    const [clickUser, setClickUser] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [userName, setUserName] = useState("");
    const [autoLogin, setAutoLogin] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const storedUser = localStorage.getItem('autoLoginUser')
        if(storedUser){
            const {email, password} = JSON.parse(storedUser)
            handleLogin(email, password, true)
        }
    }, [])

    function listClick(){
        setClickList(!clickList)
    }

    function userClick(){
        setClickUser(!clickUser)
        setEmail('')
        setPassword('')
    }

    function gotoHome(){
        navigate('/DaydailLee')
        setClickUser(false)
    }

    function gotoRegister(){
        navigate('/register')
        setClickUser(false)
    }

    const handleLogin = async(loginEmail = email, loginPassword = password, fromLocalStorage = false) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            const user = userCredential.user
            setLoginSuccess(true)

            const userDoc = await getDoc(doc(db, 'users', user.uid));
            setUserName(userDoc.data().name);

            setEmail('')
            setPassword('')

            if(autoLogin && !fromLocalStorage){
                localStorage.setItem('autoLoginUser', JSON.stringify({email: loginEmail, password: loginPassword}))
            }
        }catch(error){
            console.error("Error logging in : ", error)
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('가입되지 않은 회원이거나,\n이메일 및 비밀번호가 올바르지 않습니다.');
                    break;
                case 'auth/wrong-password':
                    alert('가입되지 않은 회원이거나,\n이메일 및 비밀번호가 올바르지 않습니다.');
                    break;
                case 'auth/invalid-email':
                    alert('가입되지 않은 회원이거나,\n이메일 및 비밀번호가 올바르지 않습니다.');
                    break;
                case 'auth/user-disabled':
                    alert('비활성화된 계정입니다.');
                    break;
                default:
                    alert('알 수 없는 오류가 발생했습니다.\n고객센터로 문의해 주시기 바랍니다.')
            }
        }
    }

    function handleLogout(){
        auth.signOut();
        setLoginSuccess(false);
        setUserName("");
        localStorage.removeItem('autoLoginUser')
        alert('로그아웃되었습니다.')
    }

    return(
        <div className="header_container">
            <div className="header_area">
                {!clickList ? (
                    <AiOutlineMenu className="header_icon" onClick={listClick}/>
                ): (
                    <AiOutlineClose className="header_icon" onClick={listClick}/>
                )}
                <p
                    className="header_logo"
                    onClick={gotoHome}
                >DaydailLee</p>
                <div className="header_icon_group">
                    <AiOutlineUser className="header_icon" onClick={userClick}/>
                    <FiSearch className="header_icon"/>
                    <TbShoppingCart className="header_icon"/>
                </div>
            </div>
            {clickList && (
                <div className="list_area">
                    <div className="list_detail_area">
                        <p>BEST</p>
                    </div>
                    <div className="list_detail_area">
                        <p>NEW</p>
                    </div>
                    <div className="list_detail_area">
                        <p>TOP</p>
                        <span>Short Sleeve</span>
                        <span>Shirt</span>
                        <span>Neat</span>
                    </div>
                    <div className="list_detail_area">
                        <p>BOTTOM</p>
                        <span>Jeans</span>
                        <span>Half</span>
                    </div>
                    <div className="list_detail_area">
                        <p>SHOES</p>
                    </div>
                    <div className="list_detail_area">
                        <p>ACC</p>
                    </div>
                    <div className="list_detail_area">
                        <p>SALES</p>
                    </div>
                </div>
            )}

            {clickUser && (
                <div className="user_area">
                    {loginSuccess ? (
                        <div className="login_area">
                            <span>{userName}님 환영합니다!</span>
                            <div style={{display: "flex", gap: '20px'}}>
                                <span>마이페이지</span>
                                <span>주문확인</span>
                            </div>
                            <button
                                className="login_btn"
                                onClick={handleLogout}
                            >로그아웃</button>
                        </div>
                    ): (
                        <div className="login_area">
                            <span className="login_title">DaydailLee Login</span>
                            <div className="login_input_area">
                                <AiOutlineUser className="login_icon"/>
                                <input 
                                    placeholder="이메일을 입력해주세요."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login_input_area">
                                <AiOutlineLock className="login_icon"/>
                                <input 
                                    placeholder="비밀번호를 입력해주세요."
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="auto_login_area">
                                <input 
                                    type="checkbox"
                                    className="auto_login_checkbox"
                                    id="autoLoginCheckbox"
                                    checked={autoLogin}
                                    onChange={(e) => setAutoLogin(e.target.checked)}
                                />
                                <label htmlFor="autoLoginCheckbox" className="auto_login">자동로그인</label>
                            </div>
                            <button
                                className="login_btn"
                                onClick={() => handleLogin()}
                            >LOGIN</button>
                            <div className="register_area">
                                <div>
                                    <span onClick={gotoRegister}>회원가입</span>
                                </div>
                                <div>
                                    <span>아이디 / 비밀번호 찾기</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
export default Header;