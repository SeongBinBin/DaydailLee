import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer_container">
            <div className="footer_area">
                <div>
                    <p>고객센터</p>
                    <span>012-345-6789</span>
                </div>
                <div>
                    <p>DaydailLee</p>
                    <span>대표 : 홍길동</span>
                    <span>주소 : ~~</span>
                </div>
                <div>
                    <p>Instagram</p>
                    <span>abcdefg</span>
                </div>
            </div>
        </div>
    )
}
export default Footer