import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>;


        return (
            <main className="bg-gray-200 min-h-screen p-12"> 
                <article className="container shadow-lg mx-auto bg-white rounded-lg">
                    <header className="relative">
                        <div className="absolute h-full w-full flex item-center justify-center">
                            <div className="bg-black bg-opacity-20 rounded w-full p-24">
                                <h1 className="text-3xl text-white text-left font-bold tracking-tighter lg:text-6xl px-24 pt-12 mb-4">{singlePost.title}</h1>
                                <div className="flex justify-center text-gray-800">
                                    {/* <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-12 h-12 rounded-full"/></div>
                                <p className="flex items-center justify-center pl-2">{singlePost.name}</p> */}
                            </div>
                        </div>
                    
                        </div>
                        <img src={singlePost.mainImage.asset.url} alt={singlePost.title} 
                        className="w-full object-cover object-center rounded-t"
                        style={{height: "40vh"}}                       />
                    </header>
                    <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                        <BlockContent blocks={singlePost.body} projectId="ljuollkw" dataset="production"/>
                    </div>
                </article>
            </main>
        
            )
}