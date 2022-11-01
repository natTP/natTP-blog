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

// TODO slug for thai content
export const query = graphql`
    query ($id: String) {
        strapiArticle(id: { eq: $id }) {
            title
            publishedAt
        }
    }
`

export default Article
