import React from 'react'

function BlockEmbeddedVideo({ data }) {
    return (
        <div className='pt-[63%] w-full overflow-hidden relative'>
            <iframe
                width='560'
                height='315'
                className='w-full h-full absolute top-0 left-0 rounded aspect-video'
                src={data.link}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture'
            ></iframe>
        </div>
    )
}

export default BlockEmbeddedVideo
