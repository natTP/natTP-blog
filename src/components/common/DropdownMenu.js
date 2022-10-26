import { Link } from 'gatsby'
import React from 'react'

function DropdownMenu({ className }) {
    // TODO : Grab from backend
    const categories = [
        { id: 1, slug: 'design-dev-story', name: 'Design/Dev Story' },
        { id: 2, slug: 'literature-review', name: 'Literature Review' },
        { id: 3, slug: 'my-experience', name: 'My Experience' },
        { id: 4, slug: 'writers-road', name: "Writer's Road" },
    ]

    // TODO : Staggered appear
    return (
        <ul className={`w-full pt-1 md:w-max md:pt-0 bg-neutral-100 ${className}`}>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className='px-4 py-2 md:py-3 w-full font-loopless font-regular cursor-pointer text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-300'
                >
                    <Link to={`/column/${category.slug}`}>{category.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default DropdownMenu
