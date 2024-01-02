import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function LandingArt({ className }) {
    return (
        <div className={`${className} relative`}>
            <StaticImage
                src='../../assets/hero-art/particle1.png'
                alt='paper'
                className='absolute top-0 left-0 animate-[fall-straight_13s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle2.png'
                alt='paper'
                className='absolute top-0 left-0 animate-[fall-straight_10s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle3.png'
                alt='paper'
                className='absolute top-0 left-0 animate-[fall-straight_14s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle4.png'
                alt='paper'
                className='absolute top-0 left-0 animate-[fall-straight_10s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle5.png'
                alt='paper'
                className='absolute top-0 left-0 animate-[fall-straight_13s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle6.png'
                alt='cd'
                className='absolute top-0 left-0 animate-[fall-straight_17s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle7.png'
                alt='book'
                className='absolute top-0 left-0 animate-[fall-straight_16s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle8.png'
                alt='book'
                className='absolute top-0 left-0 animate-[fall-straight_14s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/particle9.png'
                alt='laptop'
                className='absolute top-0 left-0 animate-[fall-straight_13s_ease-in-out_infinite]'
            />
            <StaticImage
                src='../../assets/hero-art/chara.png'
                alt='landing page artwork of nattp writing in midair'
                className='absolute top-0 left-0 animate-fall'
            />
        </div>
    )
}

export default LandingArt