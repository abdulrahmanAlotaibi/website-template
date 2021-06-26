import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href="/">
            <a className="flex items-center justify-center relative xl:text-xl font-semibold">
             Abdulrahman Alotaibi
            </a>
        </Link>
    )
}

export default Logo
