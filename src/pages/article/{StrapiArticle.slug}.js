import React from 'react'
import Wave from 'assets/wave-2.svg'
import { graphql, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import ClickableColumnName from 'components/article/ClickableColumnName'
import ClickableTag from 'components/article/ClickableTag'
import BlocksRenderer from 'components/blocksRenderer'
import TableOfContents from 'components/article/TableOfContents'
import ReferenceItem from 'components/article/ReferenceItem'
import AboutAuthor from 'components/article/AboutAuthor'
import Button from 'components/common/Button'
import LikeSection from 'components/article/LikeSection'
import ArticleCard from 'components/card/ArticleCard'
import { dateTimeStringToLocaleDateString } from 'utils/dateUtils'
import { calculateTotalReadTime } from 'utils/readTimeUtils'
import { getRandCombination } from 'utils/randUtils'

// TODO : Views (from analytics)
// TODO : Cover image parallax
// TODO : Move table of contents to after first block
// FIXME : Image section position could be dynamic
function Article({ data }) {
    const article = data.strapiArticle
    const nextArticles = getRandCombination(data.allStrapiArticle.nodes, 3)

    return (
        <div className='grid grid-cols-5 gap-6'>
            <section className='col-span-full md:col-span-3 flex flex-col gap-4'>
                <div className='w-full relative'>
                    <GatsbyImage
                        image={getImage(article.cover.localFile)}
                        alt={article.cover.alternativeText}
                        loading='eager'
                        className='w-full rounded-lg aspect-[16/9]'
                    />
                    <Button
                        icon={{ icon: faChevronLeft }}
                        className='absolute top-5 left-5'
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </Button>
                    <Wave className='z-10 absolute bottom-0 fill-white stroke-white stroke-[7px]' />
                </div>

                <section className='mt-[-54px] 2xs:mt-[-74px] xs:mt-[-104px] sm:mt-[-164px] md:mt-[-99px] lg:mt-[-134px] xl:mt-[-174px] z-20 flex flex-col gap-4'>
                    <div className='flex flex-row gap-4'>
                        <span
                            className='inline-block w-2 h-full rounded shrink-0
                    bg-gradient-to-b from-rhodonite-300 to-amethyst-300'
                        />
                        <span>
                            <ClickableColumnName column={article.column} />
                            <h1 className='text-neutral-900 mt-1'>{article.title}</h1>
                        </span>
                    </div>

                    <div
                        className='flex flex-row gap-x-5 gap-y-1 flex-wrap
                    font-loopless text-regular text-base text-neutral-500'
                    >
                        <span>
                            <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                            {dateTimeStringToLocaleDateString(article.publishedAt)}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faBookmark} className='mr-2' />
                            เวลาอ่าน {calculateTotalReadTime(article.blocks)} นาที
                        </span>
                    </div>

                    <div className='flex flex-row gap-x-3 gap-y-2 flex-wrap'>
                        {article.tags.map((tag) => (
                            <ClickableTag key={tag.id} tag={tag} />
                        ))}
                    </div>
                </section>

                <TableOfContents blocks={article.blocks} expandable className='block md:hidden mt-7' />

                <article className='mt-3 md:mt-7'>
                    <BlocksRenderer blocks={article.blocks || []} />
                </article>

                {article.references.length > 0 && (
                    <section className='mt-7'>
                        <h2 className='text-neutral-700 mb-3'>อ้างอิง</h2>
                        <ul>
                            {article.references.map((reference) => (
                                <ReferenceItem key={reference.id} reference={reference} />
                            ))}
                        </ul>
                    </section>
                )}

                <LikeSection className='mt-7' articleId={article.slug} />

                <AboutAuthor author={article.author} className='mt-7' />
            </section>
            <TableOfContents
                blocks={article.blocks}
                className='hidden md:block col-span-2 sticky top-20 px-6 md:mt-[50%]'
            />
            <section className='mt-14 col-span-full'>
                <h2 className='text-neutral-700 mb-3'>คุณอาจสนใจ...</h2>
                <ul className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-6 py-5'>
                    {nextArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </ul>
            </section>
        </div>
    )
}

export const query = graphql`
    query ($id: String) {
        strapiArticle(id: { eq: $id }) {
            title
            slug
            publishedAt
            cover {
                alternativeText
                localFile {
                    childImageSharp {
                        gatsbyImageData(aspectRatio: 1.77, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
            column {
                title
                slug
            }
            tags {
                id
                title
            }
            blocks {
                ...Blocks
            }
            references {
                id
                type
                title
                link
                author
                dateCreated
                dateAccessed
            }
            author {
                title
                description
                socials {
                    link
                }
                avatar {
                    alternativeText
                    localFile {
                        childImageSharp {
                            gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
        allStrapiArticle(limit: 10, sort: { fields: publishedAt, order: DESC }) {
            nodes {
                id
                title
                slug
                column {
                    title
                    slug
                }
                publishedAt
                blocks {
                    __typename
                    ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
                        childStrapiComponentSharedRichTextBodyTextnode {
                            childMarkdownRemark {
                                fields {
                                    readingTime {
                                        minutes
                                    }
                                }
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
`

export default Article
