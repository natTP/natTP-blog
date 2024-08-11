import React, { useState } from 'react'
import useHeadingObserver from 'hooks/useHeadingObserver'
import Star from 'assets/star.svg'
import useScrollPosition from 'hooks/useScrollPosition'

function TableOfContents({ blocks, expandable, hidden = false, className }) {
    const activeId = useHeadingObserver()
    const scrollPosition = useScrollPosition()
    const [isExpanded, setIsExpanded] = useState(true)

    const contents = []

    blocks.forEach((block) => {
        if (block.__typename === 'STRAPI__COMPONENT_SHARED_RICH_TEXT') {
            const headings = block.childStrapiComponentSharedRichTextBodyTextnode.childMarkdownRemark.headings
            const filteredContents = headings.filter((item) => item.depth <= 3)
            contents.push(...filteredContents)
        }
    })

    const calculateMargin = (depth) => {
        switch (depth) {
            case 2:
                return 'mt-4 mb-1'
            case 3:
                return 'my-1 ml-8'
            case 4:
            // return 'my-1 ml-12'
            case 5:
            // return 'my-1 ml-16'
            case 6:
            // return 'my-1 ml-20'
            default:
                return 'hidden'
        }
    }

    if (scrollPosition > 90) return null
    if (contents.length < 1) return null

    return (
        <nav
            className={`${hidden ? 'hidden' : ''} h-fit my-4 ${className} ${
                expandable ? '' : 'overflow-auto'
            } row-span-1`}
        >
            <div className='flex items-baseline gap-2'>
                <h2 className='font-decorative text-xl leading-4 uppercase text-neutral-300'>Table of Contents</h2>

                {expandable && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className='font-loopless font-medium text-sm text-neutral-500 underline-link'
                    >
                        [{isExpanded ? 'ซ่อน' : 'แสดง'}]
                    </button>
                )}
            </div>

            <ul
                className={`font-loopless font-medium text-body tracking-wide 
                    ${
                        isExpanded ? 'max-h-[4048px]' : 'max-h-0'
                    } overflow-hidden transition-[max-height] ease-in-out duration-500`}
            >
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
                        {activeId === item.id && <Star className='inline w-5 ml-1 fill-amethyst-200' />}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default TableOfContents
