import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"
import logooutline from "../images/crescental logo outline.svg"


export default function Blog() {
    const [postData, setPost] = useState (null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            "category": categories[0]->title,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error)
    },[]);

    return (
        <main className="bg-grisecito-200 p-12 min-h-full">
            <section className="container min-h-fit mx-auto">
                <div className="flex w-full justify-between pb-8">
                    <div>
                        <h1 className="text-5xl flex basis-5/6 font-bold  mb-3 pt-8 tracking-tighter">🌠La plataforma para emprendedores <br></br>con enfoque en diseño y estrategia.</h1>
                        <div className="w-4/6 py-2">
                            
                            <h2 className="font-medium tracking-tight text-xl">Crescental es el lugar para aprender todo sobre proyectos digitales 
                            y la estrategia necesaria para conquistar el mundo digital.</h2>   
                        </div>
                    </div>
                    
                   
                    <img className="w-32 py-3 justify-end" alt="logooutline" src={logooutline}/>
                </div>

                <div className="flex justify-between">

                <div className="border border-black px-12 py-4 mb-8 w-fit">
                    <h2 className="text-6xl font-thin tracking-tighter">#Estrategia</h2>
                    </div>

                <div className="py-4 mb-8 w-fit flex">
                    <h2 className="text-7xl font-thin tracking-tighter ">Últimos</h2>
                    <h2 className="text-7xl font-bold tracking-tighter pl-3">Post</h2>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full pb-12">
                    {postData && postData.map((post, index, author) =>(
    
                    <article className="">
                        <div className="block relative"
                        key={index}>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block absolute w-full h-full flex justify-end items-end pr-4 pb-4">
                                <h2 className="text-white font-medium tracking-tight font-xl">{post.category}</h2>   
                            </span>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                            className="w-full h-72 object-cover"/> 
                                 </Link>
                         </div>

                     
                         <div className="p-8 border-black border h-1/2 bg-gray-100 px-6 py-3 mb-3">
                                <h2 className="text-black italic font-light tracking-tighter text-2xl py-3">{post.category}</h2> 
                                <Link to={"/post/" + post.slug.current}>
                                <h3 className="text-black font-semibold text-3xl hover:text-gray-800 underline decoration-transparent hover:decoration-gray-700 decoration-2 transition ease-in duration-200 underline-offset-8 tracking-tighter pb-4">
                                    {post.title}
                                </h3> </Link>
                                <Link to={"/post/" + post.slug.current}>
                                <h4 className="pb-4">Leer más</h4></Link>
                                </div>
                        
                    </article>
                   )) }
                </div>
            </section>
        </main>
    )
}