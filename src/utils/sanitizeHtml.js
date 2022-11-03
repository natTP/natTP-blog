import parse from 'html-react-parser'
import DOMPurify from 'dompurify'

export const sanitizeHtml = (htmlString) => {
    const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true }, ADD_ATTR: ['target'] })
    const html = parse(cleanHtmlString)
    return html
}
