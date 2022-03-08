import React from "react";
import { NavLink } from "react-router-dom"
import { SocialIcon }from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex items-center">
                    <NavLink to="/" exact 
                    activeclassname ="text-white"
                    className="inflex-flex py-6 px-3 mr-4 text-red-100 hover:text-yellow-300 text-4xl font-bold tracking-widest">
                        Crescental
                    </NavLink>
                    <NavLink to="/blog" exact className="inflex-flex py-3 px-3 mr-6 text-red-200 hover:text-yellow-300">
                        Blog
                    </NavLink>
                </nav>
                <div className ="inline-flex items-center py-3 px-3">
                    <SocialIcon url="mailto:leo@leovicario.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://linkedin.com/in/leovicario" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}