import React from 'react'
import { sanitizeHtml } from 'utils/sanitizeHtml'

function BlockRichText({ data }) {
    const htmlFromCMS = data.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.html

    return (
        <div
            className='prose prose-ci max-w-none
            prose-p:font-looped prose-p:text-body prose-p:tracking-wide
            prose-li:font-looped prose-li:text-body prose-li:tracking-wide

            prose-h2:pt-0 prose-h2:mb-3
            prose-h3:pt-0 prose-h3:font-medium prose-h4:pt-0
            
            prose-a:underline-link prose-a:no-underline
            prose-a:font-medium'
        >
            {htmlFromCMS && sanitizeHtml(htmlFromCMS)}
        </div>
    )
}

export default BlockRichText
