import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext, ProductContext } from '../App';

const SingleProductDetails = () => {
    const { id } = useParams();
    const convertedId = Number(id);
    const [products, setProducts] = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);
    const selectedproduct = products.find(item => item.id === convertedId);

    //add to cart in details
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
        <div className='min-h-[80vh] grid sm:grid-cols-2'>
            <div className='flex flex-col items-center justify-center p-5'>
                <img className='max-w-[50%]' src={selectedproduct.image} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center p-5 gap-5'>
                <h1 className='font-bold'>{selectedproduct.title}</h1>
                <p className='font-thin'>{selectedproduct.description}</p>
                <p className='font-bold'>${selectedproduct.price}</p>

                <Link to={'/cart'}>
                    <button onClick={() => handleCart(selectedproduct)} className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2'>Add to cart</button>
                </Link>
            </div>
        </div>
    )
}

export default SingleProductDetails