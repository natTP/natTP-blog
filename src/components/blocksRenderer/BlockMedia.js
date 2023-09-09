import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function BlockMedia({ data }) {
    const isVideo = data.file.mime.startsWith('video')

    return (
        <figure className='flex flex-col items-center gap-2'>
            {isVideo ? (
                <p>ยังไม่สามารถแสดงผลวิดิโอได้</p>
            ) : (
                <GatsbyImage
                    image={getImage(data.file.localFile)}
                    alt={data.file.alternativeText}
                    className='rounded'
                />
            )}
            <figcaption className='font-looped text-sm tracking-wide text-neutral-500 text-center'>
                {data.caption}
            </figcaption>
        </figure>
    )
}

export default BlockMedia
