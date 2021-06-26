import React from 'react'
import { client } from "../../prismic-configuration"
import Header from "../../components/Header"
import Post from '../../components/Post';
import Footer from '../../components/Footer';


function BlogPost({ post }) {

    if (!post) {
        return (
            <div>
                <Header />
                <main className="flex justify-center min-h-screen pt-10 xl:pt-20">
                    <h1 className="font-bold text-2xl">This post doesn't exist 😢</h1>
                </main>
                <Footer />
            </div>
        )
    }


    const { cover, title, content } = post.data

    return (
        <>
            <Header />
            <main className="flex justify-center min-h-screen pt-10 xl:pt-20">
                <Post title={title} content={content} cover={cover} tags={post.tags} />
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id

    try {
        const post = await client.getByUID("post", id)

        return {
            props: {
                post: post || null
            }
        }
    } catch (error) {
        console.error(error)
        return {
            props: {}
        }
    }
}

export default BlogPost
