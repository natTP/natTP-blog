import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Socials from 'components/common/Socials'
import BlocksRenderer from 'components/blocksRenderer'
import SEO from 'components/common/SEO'

function About({ data }) {
    const author = data.strapiAbout.author
    const blocks = data.strapiAbout.blocks

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
            <h1 className='col-span-full text-neutral-700'>เกี่ยวกับผู้เขียน</h1>
            <section className='col-span-3 flex flex-col gap-6 items-start'>
                <section className='grid grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 items-center'>
                    <GatsbyImage
                        image={getImage(author.avatar.localFile)}
                        alt={author.avatar.alternativeText}
                        loading='eager'
                        className='rounded-full aspect-square'
                    />

                    <div className='flex flex-col gap-2 col-start-2 col-end-6'>
                        <div className='flex items-baseline gap-4'>
                            <h2 className='text-neutral-700'>
                                natTP <span className='font-medium'>/ˈnæti pi/</span>
                            </h2>
                        </div>
                        <p className='font-loopless font-normal text-neutral-500'>{author.description}</p>
                    </div>
                </section>
                <Socials username socials={author.socials} gap={6} />
                <article className='col-span-5'>
                    <BlocksRenderer blocks={blocks || []} />
                </article>
            </section>
            <section className='col-span-2 mt-4'>
                <iframe
                    src='https://widgets.sociablekit.com/instagram-feed/iframe/178210'
                    frameBorder='0'
                    width='100%'
                    height='500'
                ></iframe>
            </section>
            {/* <iframe
                src='https://widgets.sociablekit.com/twitter-feed/iframe/178211'
                frameBorder='0'
                width='100%'
                height='500'
                className='lg:col-span-full'
            ></iframe> */}
        </div>
    )
}

export const query = graphql`
    query {
        strapiAbout {
            author {
                avatar {
                    alternativeText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                        }
                    }
                }
                socials {
                    id
                    username
                    type
                    link
                }
                description
            }
            blocks {
                ...Blocks
            }
            seo {
                metaTitle
            }
        }
    }
`

export default About

export const Head = ({ data }) => <SEO title={data.strapiAbout.seo.metaTitle} pathname='/about' />
