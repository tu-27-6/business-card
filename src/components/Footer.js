import React from "react"
import "../style/footer.css"
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
export default function Footer() {
    return (
        <div className="footer">
            <div className="icon-footer">
                <a href="https://www.instagram.com/ntu.vu/" target={"_blank"} rel="noreferrer"><BsInstagram color="#fff"/></a>
                <a href="https://www.facebook.com/tu.276/" target={"_blank"} rel="noreferrer"><BsFacebook color="#fff"/></a>
                <a href="https://github.com/tu-27-6" target={"_blank"} rel="noreferrer"><BsGithub color="#fff"/></a>
            </div>
            
        </div>
    )
}
