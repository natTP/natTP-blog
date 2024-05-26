import { sanitize } from 'isomorphic-dompurify'

export const calculateTotalReadTime = (blocks) => {
    const CHAR_PER_WORD = 4
    const WORD_PER_MIN = 265

    let totalReadTime = 0

    blocks.forEach((block) => {
        if (block.__typename === 'STRAPI__COMPONENT_SHARED_RICH_TEXT') {
            const text = block.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.rawMarkdownBody
            if (text) {
                const readTime = text.length / CHAR_PER_WORD / WORD_PER_MIN
                totalReadTime += readTime
            }
        }
    })
    return Math.ceil(totalReadTime)
}
