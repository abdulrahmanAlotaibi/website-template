import React from 'react'

function Cover({ src, alt, ...others }) {
    return (
        <img
            className="rounded-md w-full  object-fill"
            src={src} alt={alt} {...others} />
    )
}

export default Cover
