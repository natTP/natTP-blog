import React from 'react'
import { graphql } from 'gatsby'

function Article({ data }) {
    return (
        <>
            <h1>{data.strapiArticle.title}</h1>
            <p className='font-looped text-body tracking-wide w-full text-left'>{data.strapiArticle.description}</p>
        </>
    )
}

// FIXME no need for slug in strapi
// TODO Edit Strapi collection structure and content to reflect the real thing
export const query = graphql`
    query ($id: String) {
        strapiArticle(id: { eq: $id }) {
            title
            description
            publishedAt
        }
    }
`

export default Article
