import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='text-white flex flex-col justify-center mx-auto text-center h-screen mt-[-120px] gap-5 p-2 bg-bl bg-black'>
            <h1 className='font-bold text-2xl md:text-5xl' >Fatest Delivery in your town</h1>

            <p className='text-[#3500D3] py-5 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> S rem eum, eos dolorem accusantium! Officiis, <span className='text-gray-100'> <Typed
                strings={['Fast', 'Reliable', 'Safe']}
                typeSpeed={100}
                backSpeed={150}
                loop
            /> </span></p>

            <button className='bg-[#3500D3] rounded-md  px-5 py-1 w-[200px] mx-auto'>Get Started</button>
        </div>
    )
}

export default Hero