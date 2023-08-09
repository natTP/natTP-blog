import React, { useState } from 'react'
import useHeadingObserver from 'hooks/useHeadingObserver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import useScrollPosition from 'hooks/useScrollPosition'

function TableOfContents({ blocks, expandable, className }) {
    const activeId = useHeadingObserver()
    const scrollPosition = useScrollPosition()
    const [isExpanded, setIsExpanded] = useState(true)

    const contents = []

    blocks.forEach((block) => {
        if (block.__typename === 'STRAPI__COMPONENT_SHARED_RICH_TEXT') {
            const headings = block.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.headings
            contents.push(...headings)
        }
    })

    const calculateMargin = (depth) => {
        switch (depth) {
            case 2:
                return 'mt-4 mb-1'
            case 3:
                return 'my-1 ml-8'
            case 4:
                return 'my-1 ml-12'
            case 5:
                return 'my-1 ml-16'
            case 6:
                return 'my-1 ml-20'
            default:
                return ''
        }
    }

    if (scrollPosition > 90) return null
    if (contents.length < 1) return null

    return (
        <nav className={`h-fit max-h-screen my-4 ${className} ${expandable ? '' : 'overflow-auto'} row-span-1`}>
            <div className='flex items-baseline gap-2'>
                <h2 className='font-decorative text-xl leading-4 uppercase text-neutral-300'>Table of Contents</h2>

                {expandable && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='font-loopless font-medium text-sm text-neutral-500 underline-link'
                    >
                        [{isExpanded ? 'Hide' : 'Show'}]
                    </button>
                )}
            </div>
            {isExpanded && (
                <ul className='my-4 font-loopless font-medium text-body tracking-wide'>
                    {contents.map((item) => (
                        <li
                            key={`${item.depth}-${item.id}`}
                            className={`group w-fit
                        ${calculateMargin(item.depth)}
						${activeId === item.id ? 'font-bold text-gradient' : 'text-neutral-500'}`}
                        >
                            <a href={`#${item.id}`} className='underline-gradient focus:text-neutral-700'>
                                {item.value}
                            </a>
                            {activeId === item.id && (
                                <FontAwesomeIcon icon={faAsterisk} size='xs' className=' ml-1 text-amethyst-300' />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default TableOfContents
