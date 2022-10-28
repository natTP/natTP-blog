import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AppContainer({ className, children }) {
    return (
        <div className={`w-screen min-h-screen relative bg-white ${className}`}>
            <Navbar />
            <div className='pb-[220px]'>{children}</div>
            <Footer />
        </div>
    )
}

export default AppContainer
