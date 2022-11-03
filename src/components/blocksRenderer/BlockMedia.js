import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function BlockMedia({ data }) {
    const isVideo = data.file.mime.startsWith('video')

    return (
        <figure>
            {isVideo ? (
                <p>ยังไม่สามารถแสดงผลวิดิโอได้</p>
            ) : (
                <GatsbyImage
                    image={getImage(data.file.localFile)}
                    alt={data.file.alternativeText}
                    className='rounded'
                />
            )}
            <figcaption className='mt-2 font-looped text-sm tracking-wide text-neutral-500 text-center'>
                {data.caption}
            </figcaption>
        </figure>
    )
}

export default BlockMedia
