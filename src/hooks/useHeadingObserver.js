import { useEffect, useRef, useState } from 'react'

function useHeadingObserver() {
    const observer = useRef()
    const [activeId, setActiveId] = useState()

    useEffect(() => {
        const handleObsever = (entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }

        observer.current = new IntersectionObserver(handleObsever, {
            rootMargin: '-20% 0% -50% 0%',
        })

        const elements = document.querySelectorAll('h2, h3, h4, h5, h6')
        elements.forEach((elem) => observer.current.observe(elem))
        return () => observer.current?.disconnect()
    }, [])

    return activeId
}

export default useHeadingObserver
