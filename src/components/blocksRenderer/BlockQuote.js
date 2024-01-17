import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function BlockQuote({ data }) {
    return (
        <blockquote className='group pt-10 flex flex-col gap-4 items-center'>
            <p
                className='w-fit mx-14 xs:mx-20 relative font-decorative text-sm md:text-lg tracking-wide text-amethyst-500 
                    text-center whitespace-pre-wrap'
            >
                <FontAwesomeIcon
                    icon={faQuoteLeft}
                    size='3x'
                    className='absolute top-[-48px] left-[-48px] text-amethyst-0
                    group-hover:scale-125 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-12
                    transition-transform ease-out duration-500'
                />
                <FontAwesomeIcon
                    icon={faQuoteRight}
                    size='3x'
                    className='absolute bottom-[-48px] right-[-48px] text-amethyst-0
                    group-hover:scale-125 group-hover:translate-x-[-0.5rem] group-hover:translate-y-[-0.5rem] group-hover:rotate-12
                    transition-transform ease-out duration-500'
                />
                <span className='relative z-10'>{data.body}</span>
            </p>
            <cite className='relative z-10 font-loopless font-normal text-sm text-neutral-500 text-center'>
                {data.title}
            </cite>
        </blockquote>
    )
}

export default BlockQuote
