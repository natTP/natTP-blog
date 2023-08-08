import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

function DropdownMenu({ className }) {
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

    // TODO : Staggered appear
    return (
        <ul className={`w-full pt-1 md:w-max md:pt-0 bg-neutral-100 ${className}`}>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className='px-4 py-2 md:py-3 w-full max-w-[280px] font-loopless font-regular cursor-pointer text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-300'
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
