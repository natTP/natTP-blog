import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({ bordered, icon, className, children, onClick, disabled }) {
    return (
        <button
            className={`group rounded-full max-w-fit
            ${bordered ? 'p-0.5' : 'p-0'}
            bg-gradient-to-r from-rhodonite-300 to-amethyst-300
            font-loopless font-bold text-sm leading-7 uppercase text-amethyst-500
            active:ring active:ring-amethyst-300/30 
            ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <div
                className={`${bordered ? 'px-3.5 py-1.5' : 'px-4 py-2'}
                max-w-fit rounded-lg bg-white group-hover:bg-neutral-100`}
            >
                {icon && <FontAwesomeIcon icon={icon.icon} className={icon.color} />}
                <span className='ml-2 underline-gradient'>{children}</span>
            </div>
        </button>
    )
}

export default Button
