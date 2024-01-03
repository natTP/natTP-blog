import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function AppContainer({ className, children }) {
    return (
        <div className={`w-screen min-h-screen relative overflow-x-clip bg-white ${className}`}>
            <Navbar />
            <div
                className='m-auto pt-4 md:pt-12 pb-[220px] px-5 md:px-[72px] 2xl:max-w-[1392px]
                selection:bg-amethyst-200 selection:text-amethyst-700'
            >
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default AppContainer
