import React from 'react'
import Cover from './Cover';
import ProgressBar from "../components/ProgressBar"

function Post({ cover, title, content }) {

    // map the json content to the markdown 
    const renderedContent = content?.map(c => {

        switch (c.type) {
            case "paragraph": {
                const renderedSpans = c.spans.map(s => {
                    switch (s.type) {
                        case "strong":
                            return <span className="font-bold">{c.text}</span>
                        case "hyperlink":
                            return <a href={s.data.url} className="font-bold pb-2 border-b-4
                            border-indigo-600">{c.text}</a>
                        default:
                            return <p className="text-xl mt-4 mb-4 block leading-10 break-words">{c.text}</p>
                    }
                })

                if (renderedSpans.length > 0) {
                    return <>{renderedSpans}</>
                }

                return <p className="text-xl mt-4 mb-4 block leading-10 break-words">{c.text}</p>
            }
            case "preformatted":
                return <pre className="p-4 block w-full bg-gray-700 rounded-md mt-8 mb-8 overflow-x-scroll ">{c.text}</pre>
            case "image":
                return <Cover src={c.url}>{c.text}</Cover>
            case "hyperlink":
                return <a href={c.data.url} className="font-semibold pb-2 border-b-4
                 border-indigo-600">{c.text}</a>
            case "list-item": {
                return <div>📝&nbsp;{c.text}</div>
            }
            default:
                return <div>{c.text}</div>
        }
    })

    return (
        <article className="w-full p-8 xl:w-lggg ">
            <ProgressBar />
            {cover?.url && <Cover src={cover.url} alt={cover.alt} />}
            <h1 className="text-3xl xl:text-6xl  font-bold  mb-8 mt-10 xl:mt-14">
                {title[0].text}
            </h1>
            <div className="text-gray-200  text-lg leading-10">
                {renderedContent}
            </div>
        </article>
    )
}

export default Post
