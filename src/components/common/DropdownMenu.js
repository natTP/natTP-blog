import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

function DropdownMenu({ className, setIsDropdownOpen, setIsMenuOpen }) {
    const categoriesQuery = useStaticQuery(graphql`
        query {
            allStrapiColumn {
                nodes {
                    title
                    id
                    slug
                    tagline
                }
            }
        }
    `)

    const categories = categoriesQuery.allStrapiColumn.nodes
    console.log(categories)

    return (
        <ul
            className={`w-full pt-1 md:w-max md:pt-0 ${className}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >
            {categories.map((category, i) => (
                <li
                    key={category.id}
                    className='px-4 py-2 md:py-3 w-full max-w-[280px] font-loopless font-regular cursor-pointer bg-neutral-100
                        text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-300 animate-appear opacity-0'
                    style={{ '--delay': i * 0.25 + 's' }}
                    onClick={() => {
                        setIsDropdownOpen(false)
                        setIsMenuOpen(false)
                    }}
                >
                    <Link to={`/column/${category.slug}`}>
                        {category.title}
                        <br />
                        <span className='text-sm opacity-70'>{category.tagline}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default DropdownMenu
