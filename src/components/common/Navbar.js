import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from 'assets/logo/logo-on-light.svg'
import Socials from './Socials'
import DropdownMenu from './DropdownMenu'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const menuItems = [
        {
            id: 1,
            to: '/',
            label: 'หน้าหลัก',
        },
        {
            id: 2,
            label: 'บทความ',
        },
        {
            id: 3,
            to: '/about',
            label: 'เกี่ยวกับผู้เขียน',
        },
    ]

    return (
        <header
            className='px-4 md:px-[72px] py-2 bg-neutral-100 
            flex flex-row justify-between items-center flex-wrap
            sticky top-0'
        >
            <Link to='/' className='flex flex-row items-end gap-0.5'>
                <Logo className='w-16 h-9' alt='natTP logo' />
                <span className='font-decorative text-neutral-300'>Blog</span>
            </Link>
            <FontAwesomeIcon
                icon='bars'
                className='block md:hidden text-neutral-500 cursor-pointer hover:text-neutral-700'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <nav
                className={`${isMenuOpen ? 'h-screen' : 'h-0'} w-full overflow-hidden md:block md:h-auto md:w-auto
                transition-[height] ease-in-out duration-700`}
            >
                <ul className='flex flex-col py-4 gap-4 md:flex-row md:py-0 md:gap-8'>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {item.label === 'บทความ' ? (
                                <div>
                                    <button
                                        className='font-medium text-neutral-500 underline-gradient focus:text-neutral-700'
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <span className='font-loopless mr-2'>{item.label}</span>
                                        <FontAwesomeIcon icon={`chevron-${isDropdownOpen ? 'up' : 'down'}`} size='xs' />
                                    </button>
                                    {isDropdownOpen && <DropdownMenu />}
                                </div>
                            ) : (
                                <Link
                                    to={item.to}
                                    className='font-loopless font-medium text-neutral-500 underline-gradient focus:text-neutral-700'
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                    <Socials className='py-4 md:py-0' />
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
