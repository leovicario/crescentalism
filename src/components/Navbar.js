import React from "react";
import { SocialIcon }from "react-social-icons"
import logo from "../images/logocrescental.svg"

export default function NavBar() {
    return (
        <header className="bg-black w-full sticky top-0 z-index-4">
            <div className="container mx-auto flex justify-between">
                <nav className="flex items-center py-6">
                        <a href="/"><img className="w-96 py-3" alt="logo" src={logo}/></a>
                </nav>
                <div className ="inline-flex items-center py-3 px-3">
                    <SocialIcon url="mailto:leo@leovicario.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://linkedin.com/in/leovicario" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}