import React, { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const handleMenuIcon = () => {
        setMenu(!menu);
    }
    return (
        <div className='flex justify-between items-center max-w-[1240px] mx-auto h-20 px-4 text-white bg-black'>
            <div>
                <h1 className=' font-bold text-2xl md:text-4xl '>F1 <span className='text-[#3500D3] font-bold text-xl md:text-3xl'>Delivery </span>  </h1>
            </div>
            <div className='flex items-center gap-2'>
                <TiShoppingCart ></TiShoppingCart>
                <div className='hidden md:block'>
                    <button className='bg-[#3500D3] rounded-md px-5 py-1 text-center mr-2'>Login</button>
                    <button className=' bg-[#3500D3] rounded-md px-5 py-1 text-center'>Sign up</button>
                </div>
                <ImMenu onClick={handleMenuIcon} className=' block md:hidden' size={20}></ImMenu>
                {/* Mobile view */}
                <div className={menu ? 'flex sm:hidden justify-between bg-[#282828] gap-3 fixed top-0 right-0 h-full w-[50%] p-5' : 'hidden'}>
                    <div className='flex flex-col w-[150px] gap-2'>
                        <button className=' bg-[#3500D3] rounded-md  px-5 py-1 '>Login</button>
                        <button className=' bg-[#3500D3] rounded-md px-5 py-1 '>Sign up</button>
                    </div>
                    <AiOutlineClose onClick={handleMenuIcon} size={20} ></AiOutlineClose>

                </div>





            </div>
        </div>
    )
}

export default Header