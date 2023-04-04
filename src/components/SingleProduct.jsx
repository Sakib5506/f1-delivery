import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
const SingleProduct = (props) => {
    const { id, title, image, price, description } = props.product;
    console.log(id);
    console.log(props);
    return (
        <div className='border border-[#e4e4e4]'>
            <img className='max-w-[50%] max-h-[150px]  mx-auto py-1' src={image} alt="" />
            <h1 className='font-bold py-1'>{title}</h1>
            <p className='py-1'>${price}</p>
            <button className='bg-[#0C0032] text-white rounded-md px-3 py-1'>Add to cart</button>
        </div>
    )
}

export default SingleProduct