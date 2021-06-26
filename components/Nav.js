import React, { Fragment } from 'react'
import Logo from "./Logo"
import Link from 'next/link'
import { BiChevronDown } from "react-icons/bi"
import { Menu, Transition } from '@headlessui/react'
import { BiNetworkChart } from "react-icons/bi"
import { AiOutlinePaperClip } from "react-icons/ai"

function Nav() {

    return (
        <nav className=" w-5/6 hidden lg:flex items-center justify-between text-lg">
            <ul className="align-center  flex  items-center justify-center">
                <li className="align-center flex cursor-pointer">
                    <Link href="/">
                        <Logo />
                    </Link>
                </li>
            </ul>
            <ul className="  align-center justify-center  flex  items-center ">
                <li className="align-center mr-8 flex hover:border-2 border-purple-600 transition 
                duration-300 ease-in-out cursor-pointer">

                    <Link href="/blog">
                        <a >Blog</a>
                    </Link>

                </li>
                <li className="align-center  flex mr-8 hover:border-2 border-purple-600 
                transition duration-300 ease-in-out cursor-pointer">
                    <Link href="/projects">
                        <a >Projects</a>
                    </Link>

                </li>
                <li className="align-center  flex transition hover:border-2 border-purple-600
                 duration-300 ease-in-out  mr-8 cursor-pointer">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="">
                                <div className="flex items-center text-lg  font-semibold">
                                    <a className="mr-1"> More</a>
                                    <BiChevronDown />
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-800 text-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1 text-white text-base ">

                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                className={`${active && 'bg-gray-700'} duration-200  p-1 pr-2 pl-2 flex items-center mb-2`}
                                                href="/tools"
                                            >
                                                <div className="mr-2">
                                                    <BiNetworkChart className="text-lg" />

                                                </div>
                                                <span>Tools I use</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item >
                                        {({ active }) => (
                                            <a href="https://drive.google.com/file/d/1ciNH1Ewnte_1fnAwAyi9oyYZ-c_osAjR/view?usp=sharing" target="_blank"
                                                className={`${active && 'bg-gray-700 duration-200'}  p-1 pr-2 pl-2 flex items-center `}

                                            >
                                                <div className="mr-2">
                                                    <AiOutlinePaperClip className="text-lg" />

                                                </div>
                                                <span>Download My CV</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </li>
            </ul>
        </nav >
    )
}

export default Nav
