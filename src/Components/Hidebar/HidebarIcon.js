import React from 'react'

export const HidebarIcon = ({icon,title}) => {
    return (
        <div className='hover:text-sky-400 transition-all w-full h-full cursor-pointer flex items-center flex-col text-center justify-center text-gray-600 border-b border-b-gray-300'>
            <div>
                {icon}
            </div>
            <div className='text-sm p-2'>
                {title}
            </div>
        </div>
    )
}
