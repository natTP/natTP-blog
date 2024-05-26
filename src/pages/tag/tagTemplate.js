import React from 'react'
import { graphql } from 'gatsby'
import ArticleCard from 'components/card/ArticleCard'
import Pagination from 'components/common/Pagination'
import SEO from 'components/common/SEO'

function Tag({ data, pageContext }) {
    const tag = data.strapiTag
    const articles = data.allStrapiArticle.nodes

    return (
        <div className='grid grid-cols-6 gap-6'>
            <section className='col-span-full sm:col-span-3'>
                <div>
                    <span className='font-loopless text-sm text-neutral-500'>บทความที่มีแท็ก</span>
                    <h1 className='font-decorative font-normal text-4xl leading-relaxed uppercase text-gradient'>
                        #{tag.title}
                    </h1>
                </div>
            </section>

            <section className='sm:mt-6 col-span-full flex flex-col items-center gap-8'>
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
        strapiTag(id: { eq: $id }) {
            title
        }
        allStrapiArticle(
            filter: { tags: { elemMatch: { id: { eq: $id } } } }
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
`

export default Tag

export const Head = ({ data }) => <SEO title={`บทความที่มีแท็ก ${data.strapiTag.title}`} />
