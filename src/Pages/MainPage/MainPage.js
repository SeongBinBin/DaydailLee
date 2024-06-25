import React from "react";
import './MainPage.css'

function MainPage() {
    return(
        <div className="MainPage_container">
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
            </div>
        </div>
    )
}
export default MainPage