import React from "react";
import { SocialIcon }from "react-social-icons"
import logo from "../images/logocrescental.svg"

export default function Footer() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="py-6">
                        <a href="/"><img className="w-64 py-3" alt="logo" src={logo}/></a>
                        <h3 className="text-white">Crescental © 2022</h3>
                </nav>
                <div className ="inline-flex items-center py-3 px-3">
                    <SocialIcon url="mailto:leo@leovicario.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://linkedin.com/in/leovicario" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}