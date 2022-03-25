import React from "react"
import "../style/button.css"
import {AiFillLinkedin} from "react-icons/ai"

// const email = "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi+There&to=ntu2762001@gmail.com"

export default function Buttons() {
    return (
        <form action="https://www.linkedin.com/in/tu-vu-68a289215/" target="_blank">
            <button className="butt"> <AiFillLinkedin size="14px"/> Linkedin</button>
        </form>
    )
}