import React from "react"
import image from "../images/lanza.webp"

export default function Home() {
    return (
        <main className="bg-gray-800 p-10">
            <section>
                <div className="flex">
                    <h1 className="text-white">Crescentalism</h1>
                    <img src={image} className="h-32" alt="hola"/>
                </div>
            </section>
        </main>
    )
}