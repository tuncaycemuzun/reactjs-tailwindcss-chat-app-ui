import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

export const FormInput = ({icon,placeHolder}) => {
    return (
        <div className="w-full relative">
            <input
            type="text"
            placeholder={placeHolder}
            className="cursor-text w-full h-11 outline-none px-3 text-gray-400 rounded-md shadow-xl focus:shadow-default transition-all"
            />
            {
                icon === 'email' ? <AiOutlineMail className="cursor-pointer absolute right-2 top-3 text-xl text-gray-400" /> : ''
            }
            {
                icon === 'password' ? <RiLockPasswordLine className="cursor-pointer absolute right-2 top-3 text-xl text-gray-400" /> : ''
            }
            {
                icon === 'username' ? <FiUser className="cursor-pointer absolute right-2 top-3 text-xl text-gray-400"/> : ''
            }
        </div>
    )
}
