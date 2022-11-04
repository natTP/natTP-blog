import { useState, useEffect } from 'react'

function useScrollPosition() {
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const updateScrollPosition = () => {
            const currentScrollPosition = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            if (scrollHeight) {
                setPercent(Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100)
            }
        }

        window.addEventListener('scroll', updateScrollPosition)

        return () => {
            window.removeEventListener('scroll', updateScrollPosition)
        }
    }, [])

    return percent
}

export default useScrollPosition
