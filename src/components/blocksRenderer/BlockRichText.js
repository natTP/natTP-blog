import React from 'react'
import parse from 'html-react-parser'
import DOMPurify from 'dompurify'

function BlockRichText({ data }) {
    const htmlFromCMS = data.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.html

    const sanitizeHtml = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true }, ADD_ATTR: ['target'] })
        const html = parse(cleanHtmlString)
        return html
    }

    return (
        <div
            className='prose prose-ci max-w-none
            prose-p:font-looped prose-p:text-body prose-p:tracking-wide
            prose-li:font-looped prose-li:text-body prose-li:tracking-wide

            prose-h2:pt-0 prose-h2:mb-3
            prose-h3:pt-0 prose-h3:font-medium prose-h4:pt-0
            
            prose-a:underline-link prose-a:no-underline
            prose-a:font-medium
            
            prose-pre:w-fill'
        >
            {htmlFromCMS && sanitizeHtml(htmlFromCMS)}
        </div>
    )
}

export default BlockRichText
