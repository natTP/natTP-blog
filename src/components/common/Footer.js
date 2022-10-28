import React from 'react'
import Logo from 'assets/logo/logo-solid.svg'
import Wave from 'assets/wave.svg'
import Socials from './Socials'

function Footer() {
    return (
        <footer className='absolute bottom-0 overflow-hidden w-full pt-6'>
            <Wave
                preserveAspectRatio='none'
                className='absolute bottom-12 left-0 w-[400vw] lg:w-[200vw] h-[150px] fill-neutral-100 animate-wave-back'
            />
            <Wave
                preserveAspectRatio='none'
                className='relative bottom-0 left-0 w-[400vw] lg:w-[200vw] h-[180px] fill-neutral-200 animate-wave-front'
            />
            <div
                className='flex flex-col gap-5 justify-center items-center
                absolute bottom-8 inset-x-0'
            >
                <Logo className='w-16 h-9 fill-neutral-500' alt='natTP logo' />
                <Socials />
            </div>
        </footer>
    )
}

export default Footer
