import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai"

function Footer() {

    return (
        <footer className="w-full p-4 flex items-center justify-center ">
            <div className="w-5/6 flex items-center justify-center">
                <ul className="text-3xl flex items-center ">
                    <a href="https://github.com/abdulrahmanAlotaibi" className="cursor-pointer mr-4">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/abdulrahman-alotaibi-1b31a7212/" className="cursor-pointer mr-4">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://twitter.com/alotaibidev" className="cursor-pointer">
                        <AiOutlineTwitter />
                    </a>
                </ul>
            </div>
        </footer>
    )
}


export default Footer
