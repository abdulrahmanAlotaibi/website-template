import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FiSend } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"
import axios from "axios"


function projects() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        getRepos()

    }, [])


    const getRepos = async () => {
        try {
            const res = await axios.get("https://api.github.com/users/abdulrahmanAlotaibi/repos")
            setRepos(res.data)
        } catch (error) {
            console.error(error)
        }
    }


    const renderedRepos = repos.map(repo => {
        return (
            <li className="p-4 w-full xl:w-1/3  rounded-md cursor-pointer mr-4">
                <a href={repo.html_url} className="p-4  bg-gray-800 w-full  text-left md:mr-8 h-40 overflow-ellipsis block shadow-md rounded-lg">
                    <div className="font-bold text-xl  mb-4 ">{repo.name}</div>
                    <p className="w-full h-full block text-sm xl:text-base overflow-hidden text-gray-300">{repo.description}</p>
                </a>
            </li>
        )
    })
    return (
        <div>
            <Header />
            <main className=" flex flex-col  items-center text-center min-h-screen pt-10 xl:pt-20">
                <section className="block ">
                    <h1 className="text-center text-5xl font-bold relative">My Projects
                        <div className="h-3 w-full absolute -bottom-2 left-0 bg-indigo-500 transform
                -rotate-1 opacity-40 transition duration-300"></div>
                    </h1>
                    <h2 className="text-center mt-6">A collection of my projects. </h2>
                </section>
                <section className="relative flex justify-center mt-4 w-full p-4 xl:p-0 xl:w-lggg rounded-lg">
                    <img src={require("../assets/images/super.png")}
                        className="h-full w-full xl:block hidden"
                    />
                    <div className="relative xl:absolute xl:top-1/2  xl:right-16 transform xl:translate-x-2/4 xl:-translate-y-2/4  w-full xl:w-96 bg-gray-800 
                    rounded-xl shadow-2xl p-6 text-left">
                        <h1 className="font-bold text-3xl mb-4">Super Engineer</h1>
                        <p className="text-base text-gray-200 block ">
                            This is a website I created for learning fullstack engineering in 2021. It's based completely in my experience and it's up-to-date with the current technologies.
                            Also, It's organized and indexed by paths (topics).
                        </p>

                        <div className="flex mt-8">
                            <a href="https://superengineer.vercel.app/" className="p-2 pr-4 pl-4 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center mr-4">
                                <FiSend className="mr-2" />
                                <span>Visit</span>
                            </a>
                            <a href="https://github.com/abdulrahmanAlotaibi/fullstack-roadmap" className="p-2 pr-4 pl-4 rounded-md bg-gray-900  flex items-center ">
                                <AiFillGithub className="mr-2" />
                                <span>Github Repo</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="relative flex justify-center mt-4 w-full p-4 xl:p-0 xl:w-lggg rounded-lg">
                    <img src={require("../assets/images/devkamet.png")}
                        className="h-full w-full xl:block hidden"
                    />
                    <div className="relative xl:absolute xl:top-1/2 xl:left-16 transform xl:-translate-x-2/4 xl:-translate-y-2/4  w-full xl:w-96  bg-gray-800 rounded-xl shadow-2xl p-6 text-left">
                        <h1 className="font-bold text-3xl mb-4">DevKamet</h1>
                        <p className="text-base text-gray-200 block ">
                            Learn to build any SaaS product through devKamet, an interactive platform to learn the essentials of Computer Science, Data Structures, Algorithms, and Operating Systems using Golang 👩‍🚀
                        </p>
                        <div className="flex mt-8">
                            <a href="https://github.com/abdulrahmanAlotaibi/devkamet" className="p-2 pr-4 pl-4 rounded-md bg-gray-900  flex items-center ">
                                <AiFillGithub className="mr-2" />
                                <span>Github Repo</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="relative flex justify-center mt-4 w-full p-4 xl:p-0 xl:w-lggg rounded-lg">
                    <img src={require("../assets/images/curr.png")}
                        className="h-full w-full xl:block hidden"
                    />
                    <div className="relative xl:absolute xl:top-1/2 xl:right-16 transform xl:translate-x-2/4 xl:-translate-y-2/4 w-full xl:w-96 bg-gray-800 rounded-xl shadow-2xl p-6 text-left">
                        <h1 className="font-bold text-3xl mb-4">Curricla</h1>
                        <p className="text-base text-gray-200 block ">
                            You want to write all your styles in vanilla CSS with large scale codebase ? Checkout this website 👨‍🎨
                        </p>
                        <div className="flex mt-8">
                            <a href="https://curricla.herokuapp.com/" className="p-2 pr-4 pl-4 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center mr-4">
                                <FiSend className="mr-2" />
                                <span>Visit</span>
                            </a>
                            <a href="https://github.com/abdulrahmanAlotaibi/curricla" className="p-2 pr-4 pl-4 rounded-md bg-gray-900  flex items-center ">
                                <AiFillGithub className="mr-2" />
                                <span>Github Repo</span>
                            </a>
                        </div>
                    </div>
                </section>

                {renderedRepos.length > 0 && (
                    <section className="mt-20">
                        <h1 className="text-center text-3xl font-bold w-full flex items-center justify-center"> <AiFillGithub className="mr-2 " /> <span>More Repositories</span></h1>
                        <ul className="flex flex-col items-center lg:flex-row justify-center flex-wrap">
                            {renderedRepos}
                        </ul>
                    </section>
                )
                }
            </main >
            <Footer />
        </div >
    )
}

export default projects
