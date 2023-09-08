import React from 'react'
import { navigate } from 'gatsby'
import SEO from 'components/common/SEO'
import Button from 'components/common/Button'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function NotFound() {
    return (
        <div className='flex flex-col text-center items-center justify-center gap-6 px-4 py-10'>
            <div className='font-loopless text-9xl font-bold text-neutral-200'>404</div>
            <div className='font-loopless text-5xl font-bold text-neutral-300'>ไม่พบหน้าที่คุณค้นหา</div>
            <div className='font-loopless text-3xl font-bold text-neutral-300'>กลับไปน่าจะดีกว่านะ!</div>
            <Button bordered icon={{ icon: faChevronLeft }} onClick={() => navigate(-1)} className='m-6'>
                กลับหน้าก่อน
            </Button>
        </div>
    )
}

export default NotFound

export const Head = ({ data }) => <SEO title='ไม่พบหน้าที่ค้นหา' />
