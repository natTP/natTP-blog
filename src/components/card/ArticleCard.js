import React from 'react'
import ClickableColumnName from 'components/article/ClickableColumnName'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { dateTimeStringToLocaleDateString } from 'utils/dateUtils'
import { calculateTotalReadTime } from 'utils/readTimeUtils'
import { Link } from 'gatsby'

function ArticleCard({ article, small, showColumn = true, className }) {
    if (small) {
        return (
            <div className={`group/card ${className} grid grid-cols-6 gap-4 items-center`}>
                <Link
                    to={`/article/${article.slug}`}
                    className='col-span-2 xs:col-span-1 group-hover/card:drop-shadow-2xl
                    group-hover/card:scale-105 group-hover/card:translate-y-1 group-hover/card:rotate-6
                    transition-transform ease-out duration-500'
                >
                    <GatsbyImage
                        image={getImage(article.cover.localFile)}
                        alt={article.cover.alternativeText}
                        loading='eager'
                        className='rounded aspect-[16/9]'
                    />
                </Link>
                <div className='col-span-4 xs:col-span-5 flex flex-col gap-1'>
                    {showColumn && <ClickableColumnName column={article.column} />}
                    <Link to={`/article/${article.slug}`}>
                        <h4 className='inline underline-gradient text-sm xs:text-h4 text-neutral-700 focus:text-neutral-900'>
                            {article.title}
                        </h4>
                    </Link>
                    <div
                        className='flex flex-row gap-x-5 gap-y-1 flex-wrap
                        font-loopless text-regular text-xs xs:text-sm text-neutral-500'
                    >
                        <span>
                            <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                            {dateTimeStringToLocaleDateString(article.publishedAt)}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faBookmark} className='mr-2' />
                            เวลาอ่าน {calculateTotalReadTime(article.blocks)} นาที
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`group/card ${className} grid grid-cols-1 xs:grid-cols-3 md:grid-cols-1 gap-6 self-start`}>
            <Link
                to={`/article/${article.slug}`}
                className='group-hover/card:drop-shadow-2xl
                group-hover/card:scale-105 group-hover/card:translate-y-1 group-hover/card:rotate-3
                transition-transform ease-out duration-500'
            >
                <GatsbyImage
                    image={getImage(article.cover.localFile)}
                    alt={article.cover.alternativeText}
                    loading='eager'
                    className='rounded aspect-[16/9]'
                />
            </Link>
            <div className='xs:col-span-2 md:col-span-full flex flex-col gap-2'>
                {showColumn && article.column && <ClickableColumnName column={article.column} />}
                <Link to={`/article/${article.slug}`}>
                    <h3 className='inline underline-gradient text-neutral-700 focus:text-neutral-900'>
                        {article.title}
                    </h3>
                </Link>
                <div
                    className='flex flex-row gap-x-5 gap-y-1 flex-wrap
                    font-loopless text-regular text-sm text-neutral-500'
                >
                    <span>
                        <FontAwesomeIcon icon={faCalendar} className='mr-2' />
                        {dateTimeStringToLocaleDateString(article.publishedAt)}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBookmark} className='mr-2' />
                        เวลาอ่าน {calculateTotalReadTime(article.blocks)} นาที
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
