import { graphql } from 'gatsby'
import React from 'react'
import BlockEmbeddedVideo from './BlockEmbeddedVideo'
import BlockMedia from './BlockMedia'
import BlockQuote from './BlockQuote'
import BlockRichText from './BlockRichText'

const blockTypeMap = {
    STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEO: BlockEmbeddedVideo,
    STRAPI__COMPONENT_SHARED_MEDIA: BlockMedia,
    STRAPI__COMPONENT_SHARED_QUOTE: BlockQuote,
    STRAPI__COMPONENT_SHARED_RICH_TEXT: BlockRichText,
}

const Block = ({ block }) => {
    const Component = blockTypeMap[block.__typename]

    if (!Component) return null
    return <Component data={block} />
}

function BlocksRenderer({ blocks }) {
    return (
        <div className='flex flex-col gap-5'>
            {blocks.map((block, index) => (
                <Block key={`${index}${block.__typename}`} block={block} />
            ))}
        </div>
    )
}

export const query = graphql`
    fragment Blocks on STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEOSTRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTUnion {
        __typename
        ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
            childStrapiComponentSharedRichTextBodyTextnode {
                childMarkdownRemark {
                    html
                    headings {
                        depth
                        id
                        value
                    }
                    fields {
                        readingTime {
                            minutes
                        }
                    }
                }
            }
        }
        ... on STRAPI__COMPONENT_SHARED_MEDIA {
            caption
            file {
                alternativeText
                mime
                localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
        ... on STRAPI__COMPONENT_SHARED_QUOTE {
            body
            title
        }
        ... on STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEO {
            link
        }
    }
`

export default BlocksRenderer
