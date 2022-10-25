import React from 'react'

function DropdownMenu() {
    // TODO : Grab from backend
    const categories = ['Design/Dev Story', 'Literature Review', 'My Experience', "Writer's Road"]

    // TODO : Style and animate
    return (
        <ul>
            {categories.map((category, i) => (
                <li key={i}>{category}</li>
            ))}
        </ul>
    )
}

export default DropdownMenu
