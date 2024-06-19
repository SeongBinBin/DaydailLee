import React from "react";
import './Header.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Header() {
    return(
        <div className="header_container">
            <div className="header_area">
                <AiOutlineMenu className="header_icon"/>
                <p className="header_logo">DaydailLee</p>
                <div className="header_icon_group">
                    <AiOutlineUser className="header_icon"/>
                    <FiSearch className="header_icon"/>
                </div>
            </div>
        </div>
    )
}
export default Header;