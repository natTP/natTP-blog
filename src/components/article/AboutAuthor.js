import React from 'react'
import Socials from 'components/common/Socials'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function AboutAuthor({ author, className }) {
    return (
        <section className={`group grid grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 items-center ${className}`}>
            <Link to='/about' className='group-hover:drop-shadow-2xl'>
                <GatsbyImage
                    image={getImage(author.avatar.localFile)}
                    alt={author.avatar.alternativeText}
                    loading='eager'
                    className='rounded-full aspect-square'
                />
            </Link>
            <div className='flex flex-col gap-2 col-start-2 col-end-6'>
                <h2 className='hidden xs:block font-decorative text-xl leading-4 uppercase text-neutral-300'>
                    About the Author
                </h2>
                <div className='flex items-baseline gap-4'>
                    <h3 className='font-loopless text-h2 text-neutral-700 active:text-neutral-900 underline-gradient'>
                        <Link to='/about'>{author.title}</Link>
                    </h3>
                    <Socials gap={2} color={{ default: 'text-neutral-300', hover: 'text-neutral-700' }} />
                </div>
                <p className='font-loopless font-normal text-neutral-500'>{author.description}</p>
            </div>
        </section>
    )
}

export default AboutAuthor
