import React from 'react'
import { graphql } from 'gatsby'
import ArticleCard from 'components/card/ArticleCard'
import Pagination from 'components/common/Pagination'

function Column({ data, pageContext }) {
    // const sortStates = [
    //     { slug: 'published-at', label: 'วันที่เขียน' },
    //     { slug: 'pageviews', label: 'ยอดเข้าชม' },
    // ]

    // const [sortStateIndex, setSortStateIndex] = useState(0)

    const column = data.strapiColumn
    const articles = data.allStrapiArticle.nodes

    return (
        <div className='grid grid-cols-6 gap-6'>
            <section className='col-span-full sm:col-span-3'>
                <div>
                    <span className='font-loopless text-sm text-neutral-500'>คอลัมน์</span>
                    <h1 className='font-decorative font-normal text-4xl uppercase text-gradient'>{column.title}</h1>
                    <span className='font-loopless font-medium text-base leading-10 text-gradient opacity-70'>
                        {column.tagline}
                    </span>
                </div>
                <p className='mt-4 font-loopless text-body text-neutral-700'>{column.description}</p>
            </section>

            <section className='sm:mt-6 col-span-full flex flex-col items-center gap-8'>
                {/* <div className='font-loopless text-neutral-500 flex flex-wrap items-center gap-x-4 gap-y-1'>
                    เรียงตาม
                    {sortStates.map((sortState, index) => (
                        <button
                            className={sortStateIndex === index ? `text-amethyst-500` : `text-neutral-500`}
                            onClick={() => setSortStateIndex(index)}
                        >
                            {sortState.label}
                        </button>
                    ))}
                </div> */}
                <ul className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-x-6 gap-y-8 py-5'>
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} showColumn={false} />
                    ))}
                </ul>
                <Pagination pageContext={pageContext} />
            </section>
        </div>
    )
}

export const query = graphql`
    query ($id: String, $skip: Int, $limit: Int) {
        strapiColumn(id: { eq: $id }) {
            title
            tagline
            description
        }
        allStrapiArticle(
            filter: { column: { id: { eq: $id } } }
            sort: { fields: publishedAt, order: DESC }
            skip: $skip
            limit: $limit
        ) {
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

export default Column
