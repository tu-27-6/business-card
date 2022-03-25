import React from "react"
import "../style/card.css"
import Avatar from "../images/deptrai.jpg"
import Buttons from "./Button"
import Footer from "./Footer"

export default function Card() {
    return (
        <div className="card">
            <div className="avatar"></div>
            <div className="detail">
                <h1>Ngoc Tu Vu</h1>
                <h4>Developer</h4>
                <Buttons />
                <div className="text">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}