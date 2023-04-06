import React, { useContext, useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { TiShoppingCart } from 'react-icons/ti';

const Header = () => {
    const [cart, setCart] = useContext(CartContext);
    const [menu, setMenu] = useState(false);
    const handleMenuIcon = () => {
        setMenu(!menu);
    }
    //badge item count
    let totalItem = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        totalItem = totalItem + cart[index].quantity;
    }

    return (
        <div className='flex justify-between items-center  mx-auto h-20 px-4 text-white bg-black'>

            <div>
                <Link to={'/'}>
                    <h1 className=' font-bold text-2xl md:text-4xl '>F1 <span className='text-[#3500D3] font-bold text-xl md:text-3xl'>Delivery </span>  </h1>
                </Link>
            </div>

            <div className='flex items-center gap-2'>
                <Link to={'/cart'}>

                    <div className="relative py-2 mr-6">
                        <div className="t-0 absolute left-3">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                                {totalItem}
                            </p>
                        </div>

                        <TiShoppingCart className='file: mt-2 h-5 w-4'></TiShoppingCart>
                    </div>

                </Link>

                <div className='hidden md:block'>
                    <Link to={'/login'}>
                        <button className='bg-[#3500D3] rounded-md px-5 py-1 text-center mr-2'>Login</button>
                    </Link>
                    <Link to={'/login'}>
                        <button className='bg-[#3500D3] rounded-md px-5 py-1 text-center mr-2'>Sign up</button>
                    </Link>

                </div>
                <ImMenu onClick={handleMenuIcon} className=' block md:hidden' size={20}></ImMenu>

                {/* Mobile view */}
                <div className={menu ? 'flex sm:hidden justify-between bg-[#282828] gap-3 fixed top-0 right-0 h-full w-[50%] p-5' : 'hidden'}>
                    <div className='flex flex-col w-[150px] gap-2'>
                        <Link to={'/login'}>
                            <button className=' bg-[#3500D3] rounded-md  px-5 py-1 '>Login</button>
                        </Link>
                        <Link to={'/login'}>
                            <button className=' bg-[#3500D3] rounded-md px-5 py-1 '>Sign up</button>
                        </Link>


                    </div>
                    <AiOutlineClose onClick={handleMenuIcon} size={20} ></AiOutlineClose>
                </div>
            </div>
        </div>
    )
}

export default Header