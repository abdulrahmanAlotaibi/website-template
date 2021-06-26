import React from "react";
import Nav from "./Nav";
import MinNav from "./MinNav";
import Head from 'next/head'

function Header() {
    return (
        <header>
            <Head>
                <meta charset='utf-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <meta name='description' content='Description' />
                <meta name='keywords' content='Keywords' />
                <title>Abdulrahman Alotaibi Website</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='theme-color' content='#317EFB' />
            </Head>
            <section
                className="w-full  h-24 p-4   z-50 font-medium
            text-white flex items-center justify-center "
            >
                <Nav />
                <MinNav />
            </section>
        </header>
    );
}

export default Header;
