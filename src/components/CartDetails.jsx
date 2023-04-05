import React, { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { CartContext } from '../App';


const CartDetails = (props) => {
    const { id, title, price, quantity, image } = props.allCart;
    const [cart, setCart] = useContext(CartContext);
    //add to cart in cartdetails
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
    //remove from cart
    const handleRemove = (e) => {
        const remainingItem = cart.filter(item => item.id !== e);
        console.log();
        setCart(remainingItem);
    }

    return (
        <div >

            <div className='flex items-center justify-between gap-4 '>
                <img className='max-w-[30px] max-h-[30px]' src={image} alt="" />
                <p className='max-w-[120px] md:max-w-[250px] font-semibold'>{title}</p>
                <p className='font-semibold'>${price}</p>
                <p className='font-semibold'>Qty: {quantity}</p>
                <AiFillDelete onClick={() => handleRemove(id)} className='hover:text-red-500'></AiFillDelete>

            </div>
            <hr class="h-px my-2 bg-gray-300 border-0 " />

        </div>
    )
}

export default CartDetails