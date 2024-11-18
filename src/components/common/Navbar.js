import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMinus, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Logo from 'assets/logo/logo-official-color.svg'
import Webring from 'assets/webring.svg'
import Socials from './Socials'
import DropdownMenu from './DropdownMenu'
import ReadingProgress from 'components/article/ReadingProgress'

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
        <header className='bg-neutral-100 sticky top-0 z-50'>
            <div
                className='px-5 md:px-[72px] py-2 2xl:max-w-[1392px] m-auto 
                flex flex-row justify-between items-center flex-wrap'
            >
                <span className='flex gap-4 items-center'>
                    <Link to='/' className='flex flex-row items-center gap-0.5'>
                        <Logo className='w-16 h-9' alt='natTP logo' />
                        <span className='font-decorative text-neutral-300'>Blog</span>
                    </Link>
                    <a href='https://webring.wonderful.software#blog.nattp.page' title='วงแหวนเว็บ'>
                        <Webring className='w-6 h-6' alt='วงแหวนเว็บ' />
                    </a>
                </span>

                <FontAwesomeIcon
                    icon={isMenuOpen ? faMinus : faBars}
                    className='block md:invisible text-neutral-500 cursor-pointer hover:text-neutral-700'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <nav
                    className={`${
                        isMenuOpen ? 'h-screen' : 'h-0'
                    } w-full overflow-hidden  md:block md:h-auto md:w-auto md:overflow-visible
                transition-[height] ease-in-out duration-700`}
                >
                    <ul className='flex flex-col py-4 gap-4 md:flex-row md:py-0 md:gap-8'>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                {item.label === 'บทความ' ? (
                                    <div className='relative'>
                                        <button
                                            className='font-medium text-neutral-500 underline-gradient focus:text-neutral-700'
                                            onMouseEnter={() => setIsDropdownOpen(true)}
                                            onTouchEnd={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            <span className='font-loopless mr-2'>{item.label}</span>
                                            <FontAwesomeIcon
                                                icon={isDropdownOpen ? faChevronUp : faChevronDown}
                                                size='xs'
                                            />
                                        </button>
                                        {isDropdownOpen && (
                                            <DropdownMenu
                                                className='md:absolute md:top-8 z-10'
                                                setIsDropdownOpen={setIsDropdownOpen}
                                                setIsMenuOpen={setIsMenuOpen}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={item.to}
                                        className='font-loopless font-medium text-neutral-500 underline-gradient focus:text-neutral-700'
                                        onClick={() => {
                                            setIsDropdownOpen(false)
                                            setIsMenuOpen(false)
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <Socials className='py-4 md:py-0' />
                    </ul>
                </nav>
            </div>
            <ReadingProgress />
        </header>
    )
}

export default Navbar
