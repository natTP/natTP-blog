import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AppContainer({ className, children }) {
    return (
        <div className={`w-screen min-h-screen relative bg-white ${className}`}>
            <Navbar />
            <div className='m-auto pt-4 pb-[220px] px-5 md:px-[72px] 2xl:max-w-[1392px]'>{children}</div>
            <Footer />
        </div>
    )
}

export default AppContainer
