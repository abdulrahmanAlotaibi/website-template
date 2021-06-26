import React from 'react'

function Hero() {
    return (
        <section
            className="h-lgg flex justify-center xl:items-center  w-full  p-10"
        >
            <div className="md:5/6 xl:w-4/6 flex flex-col xl:flex-row xl:justify-center xl:items-center xl:text-left text-left ">
                <img src={require("../assets/images/pic.jpg")} alt="Personal avatar" className="w-60 h-60 md:w-72 md:h-72  text-center rounded-lg xl:mr-10" />

                <hgroup className="w-full mt-10 xl:mt-0">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600">Hi, I'm Abdulrahman</h1>
                    <h2 className="xl:w-full text-lg mt-4">I got my bachelor's degree in Software Engineering from King Saud University, I'm currently living in Riyadh, Saudi Arabia.
                        Here you will find all of my updates and interests around distributed systems and data science.</h2>
                </hgroup>
            </div>
        </section>
    )
}

export default Hero
