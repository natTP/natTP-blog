import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function BlockMedia({ data }) {
    const isVideo = data.file.mime.startsWith('video')

    return (
        <figure className='flex flex-col items-center gap-2'>
            {isVideo ? (
                <p>ยังไม่สามารถแสดงผลวิดิโอได้</p>
            ) : (
                <Zoom>
                    <GatsbyImage
                        image={getImage(data.file.localFile)}
                        alt={data.file.alternativeText}
                        className='rounded'
                    />
                </Zoom>
            )}
            <figcaption className='font-looped text-sm tracking-wide text-neutral-500 text-center'>
                {data.caption}
            </figcaption>
        </figure>
    )
}

export default BlockMedia
