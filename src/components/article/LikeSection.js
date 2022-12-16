import React, { useState } from 'react'
import { ClapButton } from '@lyket/react'
import Button from 'components/common/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartBordered } from '@fortawesome/free-regular-svg-icons'
import { faEye } from '@fortawesome/free-regular-svg-icons'

// TODO cute like microinteraction
// TODO

function LikeSection({ className, articleId }) {
    return (
        <ClapButton className={className} namespace='article' id={articleId}>
            {({ handlePress, totalClaps, userClaps, isLoading }) => (
                <div className='flex flex-wrap justify-between items-center gap-1'>
                    <span className='flex gap-4 items-center'>
                        <span
                            className={`max-w-fit font-loopless font-normal text-lg ${
                                userClaps > 0 ? 'text-rhodonite-500' : 'text-neutral-500'
                            }`}
                        >
                            <FontAwesomeIcon icon={userClaps > 0 ? faHeartFilled : faHeartBordered} className='mr-2' />
                            {totalClaps}
                        </span>
                        <span className='max-w-fit font-loopless font-normal text-lg text-neutral-500'>
                            <FontAwesomeIcon icon={faEye} className='mr-1.5' />
                            1.2k
                        </span>
                    </span>
                    <span className='grow flex flex-wrap gap-4 justify-end items-center'>
                        <span className='font-loopless text-neutral-500'>
                            <div className='text-right text-sm '>
                                {userClaps > 0 ? 'ขอบคุณค่ะ! 🙏' : 'ชอบบทความนี้ไหม?'}
                            </div>
                            <div className='text-xs'>
                                {userClaps > 0 ? '' : 'อย่าลืมกดไลก์เป็นกำลังใจให้ผู้เขียนด้วยนะ'}
                            </div>
                        </span>
                        <Button
                            bordered
                            icon={{
                                icon: userClaps > 0 ? faHeartFilled : faHeartBordered,
                                color: 'text-rhodonite-500',
                            }}
                            onClick={handlePress}
                            disabled={isLoading}
                        >
                            {userClaps > 0 ? `Like again!` : 'Like!'}
                        </Button>
                    </span>
                </div>
            )}
        </ClapButton>
    )
}

export default LikeSection
