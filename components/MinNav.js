import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import Logo from "./Logo";
import { AiOutlineClose } from "react-icons/ai";

function MinNav() {
    const [isMenuOpen, setMenuIsOpen] = useState(false);
    return (
        <nav className=" w-full flex justify-between items-center  lg:hidden">
            <Logo />

            <div className="flex items-center">
                {isMenuOpen ? (
                    <>
                        <AiOutlineClose
                            className="text-3xl"
                            onClick={() => setMenuIsOpen(!isMenuOpen)}
                        />
                        <ul
                            className="p-4 bg-gray-900  shadow-md
                            w-screen min-h-screen text-center pt-24  z-50 absolute right-0 top-24"
                            id="pop"
                        >
                            <li className="p-4 text-center text-lg font-medium " onClick={() => setMenuIsOpen(false)}>
                                <Link href="/blog">
                                    <a >Blog</a>
                                </Link>
                            </li>
                            <li className="p-4 text-center text-lg font-medium" onClick={() => setMenuIsOpen(false)}>
                                <Link href="/projects"><a>Projects</a></Link>
                            </li>
                            <li className="p-4 text-center text-lg font-medium" onClick={() => setMenuIsOpen(false)}>
                                <Link href="/tools"><a>Tools I use</a></Link>
                            </li>
                            <li className="p-4 text-center text-lg font-medium" onClick={() => setMenuIsOpen(false)}>
                                <a href="https://drive.google.com/file/d/1ciNH1Ewnte_1fnAwAyi9oyYZ-c_osAjR/view?usp=sharing" target="_blank">Download My CV</a>
                            </li>

                        </ul>
                    </>
                ) : (
                    <>
                        <HiOutlineMenu
                            className="text-3xl"
                            onClick={() => setMenuIsOpen(!isMenuOpen)}
                        />
                    </>
                )}
            </div>
        </nav>
    );
}

export default MinNav;
