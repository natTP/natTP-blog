import useScrollPosition from 'hooks/useScrollPosition'
import React from 'react'

function ReadingProgress() {
    const scrollPosition = useScrollPosition()

    return (
        <span
            style={{ transform: `scaleX(${scrollPosition}%)` }}
            className={`block h-1 w-screen origin-left transition-transform ease-linear
						bg-gradient-to-r from-rhodonite-300 to-amethyst-300
                        ${scrollPosition === 100 ? 'opacity-50' : 'opacity-100'}`}
        />
    )
}

export default ReadingProgress
