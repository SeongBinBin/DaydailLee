import React, {useState, useEffect} from "react";
import './Register.css'
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { db, auth } from "../../firebase";
import Header from '../../Components/Header/Header'

function Register() {
    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        setPasswordMatch(password && confirmPassword && password === confirmPassword);
    }, [password, confirmPassword]);

    const getErrorMessage = (errorCode) => {
        switch (errorCode) {
            case 'auth/email-already-in-use':
                return '이 이메일은 이미 사용 중입니다.';
            case 'auth/invalid-email':
                return '유효하지 않은 이메일 주소입니다.';
            case 'auth/operation-not-allowed':
                return '이 작업은 현재 허용되지 않습니다.';
            case 'auth/weak-password':
                return '비밀번호를 6자 이상 입력해주세요.';
            default:
                return '알 수 없는 에러가 발생했습니다. 나중에 다시 시도해 주세요.';
        }
    }

    const registerDone = async () => {
        if(password !== confirmPassword){
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }

        try{
            const addUser = await createUserWithEmailAndPassword(auth, email, password)
            const user = addUser.user;

            const createdAt = serverTimestamp();

            await setDoc(doc(db, 'users', user.uid), {
                name: name,
                birth: birth,
                phone: phone,
                email: email,
                createdAt: createdAt,
                manager: false,
            })

            navigate('/DaydailLee')
        }catch(error){
            console.error('Error registering user : ', error)
            alert(getErrorMessage(error.code))
        }
    }

    const handleBirthInput = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setBirth(e.target.value);
        }
    }

    const handlePhoneInput = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setPhone(e.target.value);
        }
    }

    return(
        <div className="register_container">
            <Header />
            <div className="register_box">
                <span className="register_title">회원가입</span>
                <div className="register_input_area">
                    <span>NAME</span>
                    <input
                        placeholder="이름을 입력해주세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="register_input_area">
                    <span>Birth</span>
                    <input
                        placeholder="생년월일을 입력해주세요. (YYMMDD)"
                        value={birth}
                        onChange={handleBirthInput}
                        maxLength={6}
                    />
                </div>
                <div className="register_input_area">
                    <span>Phone</span>
                    <input
                        placeholder="전화번호를 입력해주세요."
                        value={phone}
                        onChange={handlePhoneInput}
                    />
                </div>
                <div className="register_input_area">
                    <span>EMAIL</span>
                    <input
                        placeholder="이메일을 입력해주세요."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="register_input_area">
                    <span>PW</span>
                    <input
                        placeholder="비밀번호를 입력해주세요. (6자 이상)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="register_input_area">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>PW Check</span>
                        {passwordMatch &&(
                            <span style={{color: '#9AD756', fontSize: '.9rem'}}>비밀번호가 일치합니다.</span>
                        )}
                    </div>
                    <input
                        placeholder="비밀번호를 다시 입력해주세요."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {name && birth && phone && email && passwordMatch ? (
                    <button
                        onClick={registerDone}
                        className="register_btn"
                    >
                        회원가입 완료
                    </button>
                ): (
                    <button
                        className="register_fail_btn"
                    >
                        회원가입 완료
                    </button>
                )}
            </div>
        </div>
    )
}
export default Register