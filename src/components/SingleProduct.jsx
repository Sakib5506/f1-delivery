import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const SingleProduct = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const { id, title, image, price, description } = props.product;
    //add to cart in home
    const handleCart = (pd) => {
        const toBeAddedId = pd.id;
        const sameProduct = cart.find(item => item.id === toBeAddedId);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProducts = cart.filter(item => item.id !== toBeAddedId)
            newCart = [...otherProducts, sameProduct]
        } else {
            pd.quantity = 1;
            newCart = [...cart, pd]
        }
        setCart(newCart)
    }


    return (
        <div className='border border-[#e4e4e4] flex flex-col items-center '>
            <Link to={'/productdetails/' + id}>
                <div className='flex flex-col items-center'>
                    <img className='max-w-[60%] max-h-[150px] mx-auto py-1 ' src={image} alt="" />
                    <h1 className='font-semibold py-1'>{title}</h1>
                    <p className='py-1 '>${price}</p>
                </div>
            </Link>
            <Link to={'/cart'}>
                <button onClick={() => handleCart(props.product)} className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2'>Add to cart</button>
            </Link>
        </div>
    )
}

export default SingleProduct