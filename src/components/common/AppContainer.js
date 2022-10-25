import React from 'react'
import Navbar from './Navbar'

function AppContainer({ className, children }) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default AppContainer
