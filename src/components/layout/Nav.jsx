import React from 'react'
import Icon from "../../images/icon.png"
const Nav = () => {
    return (
        <>
            <div className='w-full h-[10vh] bg-[#FFEAC5] flex items-center pl-4'>
                <div className='p-2 rounded-md bg-black flex'>
                    <img className='w-[35px] h-[35px]' src={Icon} alt='icon.png'/>
                    <h1 className='text-2xl font-bold text-white'>CaptionNest</h1>
                </div>

            </div>
        </>
    )
}

export default Nav
