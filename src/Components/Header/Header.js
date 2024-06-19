import React, {useState} from "react";
import './Header.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Header() {
    const [clickList, setClickList] = useState(false)

    function listClick(){
        setClickList(!clickList)
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
                    <AiOutlineUser className="header_icon"/>
                    <FiSearch className="header_icon"/>
                </div>
            </div>
        </div>
    )
}
export default Header;