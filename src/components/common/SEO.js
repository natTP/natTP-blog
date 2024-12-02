import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function SEO({ title, description, image, pathname, children, isArticle = false }) {
    const { strapiGlobal } = useStaticQuery(graphql`
        query {
            strapiGlobal {
                siteName
                siteDescription
                siteUrl
                twitterUsername
                seo {
                    metaImage {
                        localFile {
                            url
                        }
                    }
                }
            }
        }
    `)

    const seo = {
        title: (title && `${title} | natTP`) || strapiGlobal.siteName,
        description: description || strapiGlobal.siteDescription,
        image: `${image || strapiGlobal.seo.metaImage.localFile.url}`,
        url: `${strapiGlobal.siteUrl}${pathname || ``}`,
        twitterUsername: strapiGlobal.twitterUsername,
    }

    return (
        <>
            {/* Basics */}
            <title>{seo.title}</title>
            <meta name='description' content={seo.description} />

            {/* Minimum open graph tags */}
            <meta property='og:title' content={title || strapiGlobal.siteName} />
            <meta property='og:description' content={seo.description} />
            <meta property='og:type' content={isArticle ? 'article' : 'website'} />
            <meta property='og:url' content={seo.url} />

            <meta property='og:image' content={seo.image} />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />

            {/* Twitter open graph tags */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={seo.title} />
            <meta name='twitter:url' content={seo.url} />
            <meta name='twitter:description' content={seo.description} />
            <meta name='twitter:image' content={seo.image} />
            <meta name='twitter:creator' content={seo.twitterUsername} />
            <link
                rel='icon'
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🖋️</text></svg>"
            />

            {/* Canonical link */}
            <link rel='canonical' href={seo.url} />

            {children}
        </>
    )
}

export default SEO
