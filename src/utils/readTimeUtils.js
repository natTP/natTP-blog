export const calculateTotalReadTime = (blocks) => {
    let totalReadTime = 0
    blocks.forEach((block) => {
        if (block.__typename === 'STRAPI__COMPONENT_SHARED_RICH_TEXT') {
            const minutes =
                block.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.fields.readingTime.minutes
            totalReadTime += minutes
        }
    })
    return Math.ceil(totalReadTime)
}
