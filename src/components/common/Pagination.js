import { Link } from 'gatsby'
import React from 'react'

function Pagination({ pageContext }) {
    const { previousPagePath, nextPagePath } = pageContext
    return (
        <div>
            {previousPagePath && <Link to={previousPagePath}>Previous</Link>}

            {nextPagePath && <Link to={nextPagePath}>Next</Link>}
        </div>
    )
}

export default Pagination
