import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-black text-white  md:flex justify-between px-5 py-3 '>
            <div className='flex flex-col md:mx-[100px]'>
                <Link to={'/'}>
                    <div>
                        <h1 className='text-center font-bold text-2xl md:text-4xl p-5'>F1 <span className='text-[#3500D3] font-bold text-xl md:text-3xl'>Delivery </span>  </h1>
                    </div>
                </Link>
                <div className='text-center'>
                    <p className='md:p-5'><small>Copyright © 2023 MD. Sakib</small></p>
                </div>
            </div>
            <div className='md:p-5 md:mx-[150px] text-center'>
                <p>Pricing</p>
                <p>Policy</p>
                <p>Terms of use</p>
            </div>

        </div>
    )
}

export default Footer