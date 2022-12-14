import React from 'react'
import Wave from 'assets/wave-2.svg'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ClickableColumnName from 'components/article/ClickableColumnName'
import ClickableTag from 'components/article/ClickableTag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { dateTimeStringToLocaleDateString } from 'utils/dateUtils'
import BlocksRenderer from 'components/blocksRenderer'
import TableOfContents from 'components/article/TableOfContents'

// TODO : Read time (thai)
// TODO : Cover image parallax
// FIXME : Image section position could be dynamic
function Article({ data }) {
    const article = data.strapiArticle

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
                            เวลาอ่าน 10 นาที
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
            </section>
            <TableOfContents
                blocks={article.blocks}
                className='hidden md:block col-span-2 sticky top-20 px-6 md:mt-[50%]'
            />
        </div>
    )
}

export const query = graphql`
    query ($id: String) {
        strapiArticle(id: { eq: $id }) {
            title
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
        }
    }
`

export default Article
