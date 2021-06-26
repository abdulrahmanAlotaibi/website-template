import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { AiFillWindows, AiFillApple } from "react-icons/ai"
import { FaNode, FaReact, FaPython } from "react-icons/fa"
import { BsTerminal } from "react-icons/bs"
import { DiLinux } from "react-icons/di"
import { BiPaint } from "react-icons/bi"
import { SiNotion, SiBrave, SiTailwindcss, SiAmazonaws, SiMongodb, SiGnubash } from "react-icons/si"
import { FiFigma } from "react-icons/fi"


function tools() {
    const [view, setView] = useState("windows")

    const switchView = () => {
        switch (view) {
            case "windows":
                return (
                    <>
                        <li >
                            <a href="https://hyper.is/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer  h-40 border-2 border-gray-800"
                            >
                                <div className=" bg-gray-900
                            md:w-20 md:h-20 p-4 rounded-md flex justify-center items-center">
                                    <img src={require("../assets/images/hyper.png")} className=" w-14" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Hyperjs</h3>
                                    <p className="font-light hidden xl:block">A good terminal emulator I used for a long time in my Windows machine before WSL. I highly recommend it.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-md flex justify-center items-center">
                                    <DiLinux className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold  ">Windows Subsystem for Linux (WSL)</h3>
                                    <p className="font-light  hidden xl:block">Using the bare metal hypervisor (Hyper-V) you will run your VM or operating system of choice such as Ubuntu, Kali, or Arch </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.notion.so/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-pink-500 to-indigo-600  p-4  rounded-md flex justify-center items-center">
                                    <SiNotion className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Notion</h3>
                                    <p className="font-light  hidden xl:block">The best research tool I've ever used. I gain a tremendous productivity using it.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://brave.com/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-pink-500 to-red-600  p-4  rounded-md flex justify-center items-center">
                                    <SiBrave className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Brave</h3>
                                    <p className="font-light  hidden xl:block">Good to test things using Brave </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.virtualbox.org/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-blue-900 to-blue-600  p-4  rounded-md flex justify-center items-center">
                                    <img src={require("../assets/images/or.png")} className=" w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Oracle VirtualBox </h3>
                                    <p className="font-light  hidden xl:block">VirtualBox is Guest Virtual Machine, which needs your host operating system to instructs your machine (slower than bare metal with WSL)</p>
                                </div>
                            </a>
                        </li>
                    </>
                )


            case "macos":
                return <div>
                </div>
            case "cloud":
                return (
                    <>
                        <li>
                            <a
                                href="https://aws.amazon.com/s3/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-red-800 to-red-900  p-4  rounded-md flex justify-center items-center">
                                    <img src={require("../assets/images/s3.png")} className="w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Amazon S3 </h3>
                                    <p className="font-light  hidden xl:block">The storage solution that I use. it has a very good documentation, good integration with programming languages, and great performance.</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://vercel.com/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className="p-5  rounded-md flex justify-center items-center" style={{ backgroundColor: "black" }}>
                                    <img src={require("../assets/images/ver.png")} className="w-10 " />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Vercel</h3>
                                    <p className="font-light  hidden xl:block">Vercel has a great community around it. Also, the free node server is really fast. Good for any Nextjs project </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://aws.amazon.com/ec2/spot/?cards.sort-by=item.additionalFields.startDateTime&cards.sort-order=asc"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-white  p-4  rounded-md flex justify-center items-center">
                                    <img src={require("../assets/images/spot.png")} className="w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">AWS Spots </h3>
                                    <p className="font-light  hidden xl:block">AWS Spots or Google Preemptive VMs. Same as compute instances such as EC2 but can be taken from you anytime by the provider. Some companies use it for a session based workload.
                                        By sacrificing availability you gain huge discount </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://fishshell.com/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gray-600  p-4  rounded-md flex justify-center items-center">
                                    <SiGnubash className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Fish Shell </h3>
                                    <p className="font-light  hidden xl:block">fish is a smart and user-friendly command line
                                        shell for Linux, macOS, and the rest of the family.
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/DevKamet"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-purple-600  p-4  rounded-md flex justify-center items-center">
                                    <FiFigma className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Figma </h3>
                                    <p className="font-light  hidden xl:block">For all my UI/UX Designing</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/DevKamet"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-pink-600  p-4  rounded-md flex justify-center items-center">
                                    <BiPaint className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Excalidraw</h3>
                                    <p className="font-light  hidden xl:block">The best drawing app</p>
                                </div>
                            </a>
                        </li>
                    </>
                )
            case "chrome":
                return <div></div>
            case "programming":
                return (
                    <>
                        <li>
                            <a
                                href="https://github.com/DevKamet"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-blue-400 to-green-400  p-4  rounded-md flex justify-center items-center">
                                    <img src={require("../assets/images/golang.png")} className=" w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Golang</h3>
                                    <p className="font-light  hidden xl:block">My best programming language. In the next years w may see Go as the main language for large network applications </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ar.reactjs.org/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-blue-600 to-indigo-600  p-4  rounded-md flex justify-center items-center">
                                    <FaReact className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">React</h3>
                                    <p className="font-light  hidden xl:block">After using all frameworks and solutions, React still the best framework to build high quality UI. Maybe Vue is the second.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://python.org/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-green-600 to-green-700  p-4  rounded-md flex justify-center items-center">
                                    <FaPython className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Python</h3>
                                    <p className="font-light  hidden xl:block">I'm diving into probability and statics now, Python is an obvious choice for that.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/DevKamet"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-pink-600 to-blue-700  p-4  rounded-md flex justify-center items-center">
                                    <SiTailwindcss className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">TailwindCSS</h3>
                                    <p className="font-light  hidden xl:block">This is the only styling solution that I recommend beside Vanilla CSS. Another solution will lead to a miserable technical dept.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://nodejs.org/en/"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-yellow-600 to-yellow-700  p-4  rounded-md flex justify-center items-center">
                                    <FaNode className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">Nodejs</h3>
                                    <p className="font-light  hidden xl:block">Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/DevKamet"
                                className="p-6  bg-black rounded-md flex items-center cursor-pointer h-40 border-2 border-gray-800">
                                <div className=" bg-gradient-to-r from-green-600 to-green-700  p-4  rounded-md flex justify-center items-center">
                                    <SiMongodb className="h-10 w-10" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold ">MongoDB</h3>
                                    <p className="font-light  hidden xl:block">The development experience is great. Atlas also has a very good GUI for development</p>
                                </div>
                            </a>
                        </li>

                    </>
                )
            case "all":
                return <div></div>
            case "mobile":
                return <div></div>
            default:
                break;
        }
    }

    return (
        <div>
            <Header />
            <main main className=" flex flex-col  items-center text-center min-h-screen pt-10 xl:pt-20">
                <section className="">
                    <h1 className="text-center text-5xl font-bold relative">Tools I use
                        <div className="h-3 w-full absolute -bottom-2 left-0 bg-indigo-500 transform
                -rotate-1 opacity-40 transition duration-300"></div>
                    </h1>
                    <h2 className="text-center mt-6">A collection of my projects </h2>
                </section>
                <ul className="mt-10 flex flex-wrap justify-center">
                    <li className={`transform duration-200 ease-in-out ${view === "programming" ? 'bg-indigo-600' : 'hover:bg-gray-700'} 
                    rounded-full p-2 pr-4 pl-4 mr-4 cursor-pointer flex items-center
                        
                    `}
                        onClick={() => setView("programming")}
                    >
                        <BsTerminal className="mr-2 " />
                        <span>Programming</span>
                    </li>
                    <li className={`transform duration-200 ease-in-out ${view === "cloud" ? 'bg-indigo-600' : 'hover:bg-gray-700'} 
                    rounded-full p-2 pr-4 pl-4 mr-4 cursor-pointer flex items-center
                        
                    `}
                        onClick={() => setView("cloud")}
                    >
                        <SiAmazonaws className="mr-2 text-xl" />
                        <span>Cloud & Serverless</span>
                    </li>

                    <li className={` transform duration-200 ease-in-out ${view === "windows" ? 'bg-indigo-600' : 'hover:bg-gray-700'} 
                    rounded-full p-2 pr-4 pl-4 mr-4 cursor-pointer flex items-center

                    `}
                        onClick={() => setView("windows")}
                    >
                        <AiFillWindows className="mr-2" />
                        <span>Windows</span>
                    </li>
                    <li className={`transform duration-200 ease-in-out ${view === "macos" ? 'bg-indigo-600' : 'hover:bg-gray-700'} 
                    rounded-full p-2 pr-4 pl-4 mr-4 cursor-pointer flex items-center
                        
                    `}
                        onClick={() => setView("macos")}
                    >
                        <AiFillApple className="mr-2" />
                        <span>Mac OS</span>
                    </li>

                </ul>
                <ul className="grid w-full  xl:w-3/4 p-4  grid-cols-1 gap-4 xl:grid-cols-2 justify-items-stretch content-center mt-8 text-left">
                    {switchView()}
                </ul>
            </main>
            <Footer />

        </div>
    )
}

export default tools
