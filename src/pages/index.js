import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Wave from 'assets/wave.svg'
import Arrow from 'assets/arrow.svg'
import ArticleCard from 'components/card/ArticleCard'
import ClickableColumnName from 'components/article/ClickableColumnName'
import SEO from 'components/common/SEO'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { getRandInt } from 'utils/randUtils'
import { stringToSlug } from 'utils/slugUtils'
import LandingArt from 'components/art/LandingArt'
import Button from 'components/common/Button'
// import usePrevious from 'hooks/usePrevious'

function TagDisplay({ tag }) {
    return (
        <Link
            to={`/tag/${stringToSlug(tag.title)}`}
            className='py-4 font-decorative leading-relaxed tracking-wider text-3xl 3xs:text-4xl sm:text-6xl text-gradient uppercase 
            hover:text-amethyst-300 focus:text-amethyst-500 
            whitespace-nowrap border-r-2 lg:border-r-4 animate-typing'
        >
            #{tag.title}
        </Link>
    )
}

function ColumnSection({ column }) {
    const articles = column.articles.slice(-5).reverse()

    return (
        <article className='py-6 flex flex-col md:grid md:grid-cols-6 gap-x-6 gap-y-8'>
            <div className='pr-0 md:pr-4 col-span-2 md:col-span-full lg:col-span-2'>
                <ClickableColumnName column={column} large />
                <div className='mt-1 font-loopless font-medium text-base text-gradient opacity-70'>
                    {column.tagline}
                </div>
                <p className='my-4 font-loopless font-regular text-body text-neutral-700'>{column.description}</p>
                <Link to={`/column/${column.slug}`} className='group font-loopless text-amethyst-500 opacity-70'>
                    <span className='underline-gradient group-focus:text-amethyst-700'>บทความทั้งหมด</span>
                    <Arrow className='inline w-4 ml-2 fill-amethyst-500 group-focus:fill-amethyst-700' />
                </Link>
            </div>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} className='col-span-2' />
            ))}
        </article>
    )
}

function Home({ data }) {
    const tags = data.allStrapiTag.nodes
    const featuredArticles = data.allStrapiFeatured.nodes[0].articles
    const columns = data.allStrapiColumn.nodes.toSorted((a, b) => {
        return a.order - b.order
    })

    const [tagIdx, setTagIdx] = useState(getRandInt(0, tags.length - 1))
    // const prevTagIdx = usePrevious(tagIdx)

    // const displayTagsIdx = Array.from({ length: 25 }, () => getRandInt(0, tags.length - 1))

    useEffect(() => {
        const interval = setInterval(() => {
            setTagIdx((tagIdx) => getRandInt(0, tags.length - 1, tagIdx))
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <LandingArt
                className='w-screen relative left-[50%] right-[50%] mt-[-32px] ml-[-50vw] mr-[-50vw] mb-24 2xs:mb-10
                sm:w-11/12 sm:ml-[-20%] sm:mr-[20%] sm:pt-[-48px]'
            />
            <section className='min-h-[75vh] py-8 grid grid-cols-6 gap-x-6 gap-y-10 items-end'>
                <header
                    className='h-[55vh] md:h-max col-span-full flex flex-col gap-6 justify-end z-10
                transition-all ease-out duration-500'
                >
                    <h1
                        className='flex flex-col lg:flex-row gap-2 lg:gap-4 lg:items-center
                        text-5xl sm:text-6xl text-neutral-900'
                    >
                        i write about{' '}
                        <span className='relative flex flex-col h-16 sm:h-24 w-fit overflow-hidden'>
                            <TagDisplay key={`current-${tags[tagIdx].id}`} tag={tags[tagIdx]} />
                            {/* <TagDisplay key={`current-${tags[tagIdx].id}`} tag={tags[tagIdx]} />
                            {displayTagsIdx.map((displayTagIdx, idx) => (
                                <TagDisplay key={`${idx}-${tags[displayTagIdx].id}`} tag={tags[displayTagIdx]} />
                            ))}
                            <TagDisplay key={`prev-${tags[prevTagIdx || 0].id}`} tag={tags[prevTagIdx || 0]} /> */}
                        </span>
                    </h1>
                    <div className='font-loopless text-base xs:text-xl text-neutral-500'>
                        วาด เขียน โค้ด บทความจากปลายปากกา
                        <br className='hidden 3xs:inline' />
                        ของนักเขียนผู้หลงใหลในวิทย์และสุนทรีย์
                    </div>
                </header>
                <section className='mb-4 col-span-full lg:col-span-3 z-10'>
                    <h2 className='py-4 font-medium text-sm tracking-wide text-neutral-500'>บทความแนะนำ</h2>
                    <ul className='flex flex-col gap-4'>
                        {featuredArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} showColumn={false} small />
                        ))}
                    </ul>
                </section>
            </section>

            <div
                className='overflow-hidden
                        relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] max-w-screen w-screen
                        bottom-[10%] mb-[-10vh]'
            >
                <section
                    className='mt-20 pt-2 pb-40 px-5 md:px-[72px] 2xl:px-[calc((100vw-1392px)/2)] 
                        flex flex-col bg-neutral-100
                        relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] max-w-screen w-screen
                        bottom-[10%] mb-[-10vh]'
                >
                    <Wave
                        preserveAspectRatio='none'
                        className='z-0 absolute top-[-46px] left-0 w-[400vw] lg:w-[200vw] h-[150px] fill-neutral-100 animate-wave-back'
                    />
                    <div className='z-10 2xl:px-[72px] flex flex-col gap-6'>
                        <a href='#all-columns' className='group transition-all ease-in duration-300'>
                            <h2 id='all-columns' className='text-neutral-500 group-hover:text-neutral-700'>
                                คอลัมน์ทั้งหมด{' '}
                                <Arrow className='inline w-5 rotate-90 fill-neutral-300 group-hover:fill-neutral-500' />
                            </h2>
                        </a>

                        {columns.map((column) => (
                            <ColumnSection key={column.id} column={column} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export const query = graphql`
    query {
        allStrapiTag {
            nodes {
                title
                id
            }
        }
        allStrapiFeatured {
            nodes {
                articles {
                    id
                    title
                    slug
                    publishedAt
                    blocks {
                        __typename
                        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
                            childStrapiComponentSharedRichTextBodyTextnode {
                                childMarkdownRemark {
                                    rawMarkdownBody
                                }
                            }
                        }
                    }
                    cover {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(aspectRatio: 1.77, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                    }
                }
            }
        }
        allStrapiColumn(sort: { fields: publishedAt, order: ASC }) {
            nodes {
                id
                slug
                order
                title
                tagline
                description
                articles {
                    id
                    title
                    slug
                    publishedAt
                    blocks {
                        __typename
                        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
                            childStrapiComponentSharedRichTextBodyTextnode {
                                childMarkdownRemark {
                                    rawMarkdownBody
                                }
                            }
                        }
                    }
                    cover {
                        alternativeText
                        localFile {
                            childImageSharp {
                                gatsbyImageData(aspectRatio: 1.77, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                            }
                        }
                    }
                }
            }
        }
    }
`

export default Home

export const Head = () => <SEO pathname='/' />
