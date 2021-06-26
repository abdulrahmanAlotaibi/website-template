import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Prismic from "prismic-javascript";
import { AiOutlineSearch } from "react-icons/ai";
import { client } from "../../prismic-configuration"
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Input from "../../components/Input";
import LoadingSpinner from '../../components/LoadingSpinner';

function blog() {
    const [term, setTerm] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState([])

    useEffect(() => {
        searchTerm()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (term.trim()) searchTerm();
        }, 300);
        return () => clearTimeout(timer);
    }, [term])


    const searchTerm = async () => {
        setIsLoading(true)

        await client.query([
            Prismic.Predicates.at('document.type ', 'post',),
            Prismic.Predicates.fulltext('document', term),
        ]).then(res => {
            setIsLoading(false)
            setResult(res.results)
        })

    }

    const renderedResult = result?.map((res) => {
        const { uid, last_publication_date, tags, slugs } = res
        const { title, content } = res.data

        const renderedTags = tags?.map(tag => <li key={tag} className="mr-4 p-2 pr-4 pl-4 xl:text-xs mb-2 text-sm rounded-md 
        bg-indigo-600 bg-opacity-10 text-indigo-400 font-medium ">{tag}</li>)

        let date = last_publication_date.split("-").slice(0, 3)

        // Formatting weird raw date from Prismic
        date = [date[0], " / ", date[1], " / ", date[2].split("").slice(0, 2).join("")]

        return (<li className="w-full" key={uid}>
            <Link href={`/blog/${slugs[0]}`}>
                <a className="p-4  bg-gray-800 w-full md:h-64  md:mr-8 mb-6 overflow-ellipsis block shadow-md rounded-lg">
                    <div className="flex items-center flex-wrap justify-between mb-4">
                        <ul className="flex items-center flex-wrap mb-4 xl:mb-0 text-sm" >{renderedTags}</ul>
                        <div className="text-sm text-gray-300">
                            {date}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg xl:text-3xl  mb-4 ">{title[0].text}</h1>
                        <p className="w-full h-full md:block  overflow-hidden text-gray-300">{
                            content[0].text.length > 50 ? content[0].text.substring(0, 200) + " ..." : content[0].text
                        } </p>
                    </div>
                </a>
            </Link>
        </li >)
    })

    return (
        <>
            <Header />
            <main className="min-h-screen mb-10 " >
                <section className=" flex flex-col  items-center">
                    <h1 className="text-center text-5xl font-bold relative">My Blog
                        <div className="h-3 w-full absolute -bottom-2 left-0 bg-indigo-500 transform
                -rotate-1 opacity-40 transition duration-300"></div>
                    </h1>
                    <h2 className="text-center mt-6">A collection of my blog posts, mostly about Distributed Systems and Data Science. </h2>
                </section>

                <section className="flex justify-center mt-4 xl:mt-10 ">
                    <div className=" p-2 w-full xl:w-4/6 flex text-center flex-wrap justify-center xl:justify-between items-center">
                        <div className="w-full xl:w-96">
                            <Input
                                id="search-input"
                                className="hidden lg:block"
                                placeholder="Search..."
                                fullWidth
                                icon={<AiOutlineSearch />}
                                styles="bg-gray-800 "
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-2 xl:mt-10 flex justify-center " >
                    {isLoading ? (
                        <div className="w-full p-10 xl:w-4/6 flex justify-between items-center">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <ul className="w-full p-2 xl:w-4/6">
                            {
                                renderedResult?.length > 0 ? (
                                    <>
                                        {renderedResult}
                                    </>
                                ) : (
                                    <h1 className="font-semibold text-xl text-center w-full">Empty</h1>
                                )
                            }
                        </ul>
                    )}
                </section>
            </main>
            <Footer />
        </>
    )
}


export default blog
