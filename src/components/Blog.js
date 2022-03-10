import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client.js"

export default function Blog() {
    const [postData, setPost] = useState (null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            categories{
                title
            },
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
        <main className="bg-grisecito-200 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex font-bold justify-left mb-3 py-8 tracking-tighter">🌠La plataforma para emprendedores <br></br>con enfoque en diseño y estrategia </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
                    {postData && postData.map((post, index) =>(
                    <article className=" h-72">
                        
                       
                        <div className="block h-full relative"
                        key={index}>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt}
                            className="w-full h-full object-cover absolute" />
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">  
                            <h2 className="text-white font-xl">Categoría</h2> 
                            </span> </Link>
                            <div className="p-8 border-black border bg-gray-100 px-6 py-3">
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <h3 className="text-black font-semibold text-2xl hover:text-gray-800 underline decoration-transparent hover:decoration-gray-700 decoration-2 transition ease-in duration-200 underline-offset-8 tracking-tighter py-3">
                                    {post.title}
                                </h3> </Link>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <h4 className="pb-4">Leer más</h4></Link>
                            </div>
                        </div>
                   
                        
                    </article>
                   )) }
                </div>
            </section>
        </main>
    )
}