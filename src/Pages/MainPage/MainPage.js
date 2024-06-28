import React from "react";
import './MainPage.css'
import { Link } from "react-router-dom";

function MainPage() {
    return(
        <div className="MainPage_container">
            <div className="main_displayborad">
                <span>메인 제품 영역 & 이벤트 or 행사 표시 영역</span>
                <span>쇼핑몰들의 최상위 위치 슬라이드 or 클릭하면 넘어가는 컨텐츠들</span>
                <span>ex)</span>
                <Link to='https://byslim.com/index.html' target="_blank"><span>바이슬림</span></Link>
                <Link to='https://www.cheat-key.com/index.html' target="_blank"><span>치트키</span></Link>
                <Link to='https://www.smallman.co.kr/' target="_blank"><span>키작은남자</span></Link>
                <Link to='https://www.jogunshop.com/index.html' target="_blank"><span>조군샵</span></Link>
            </div>

            <div>
                <div className="category_name">
                    <span>BEST</span>
                </div>
                <div className="MainPage_area">
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_01.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_01</span>
                            <span>10,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_02.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_02</span>
                            <span>15,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_03.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_03</span>
                            <span>5,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_04.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_04</span>
                            <span>30,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_01.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_01</span>
                            <span>10,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_02.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_02</span>
                            <span>15,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_03.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_03</span>
                            <span>5,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_04.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_04</span>
                            <span>30,000원</span>
                        </div>
                    </div>
                    <div className="main_picture_area">
                        <img src={require('../../Components/Imgs/picture_01.jpg')} className="main_picture"/>
                        <div className="main_item_info">
                            <span>picture_01</span>
                            <span>10,000원</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="category_name">
                    <span>NEW</span>
                </div>
                <div className="mainpage_sub_area">
                    <img src={require('../../Components/Imgs/picture_01.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_02.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_03.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_04.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_01.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_02.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_03.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_04.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_01.jpg')} className="sub_picture"/>
                    <img src={require('../../Components/Imgs/picture_02.jpg')} className="sub_picture"/>
                </div>
            </div>
        </div>
    )
}
export default MainPage