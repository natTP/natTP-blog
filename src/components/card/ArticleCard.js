import React from 'react'
import ClickableColumnName from 'components/article/ClickableColumnName'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { dateTimeStringToLocaleDateString } from 'utils/dateUtils'
import { calculateTotalReadTime } from 'utils/readTimeUtils'
import { Link } from 'gatsby'

function ArticleCard({ article, className }) {
    console.log(article.blocks)
    return (
        <div className={className}>
            <Link to={`/article/${article.slug}`}>
                <GatsbyImage
                    image={getImage(article.cover.localFile)}
                    alt={article.cover.alternativeText}
                    loading='eager'
                    className='w-full rounded aspect-[16/9]'
                />
            </Link>
            <div className='flex flex-col gap-2 pt-6'>
                <ClickableColumnName column={article.column} />
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
