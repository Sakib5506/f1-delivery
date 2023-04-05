import React, { useContext } from 'react'
import { CartContext } from '../App'
import CartDetails from './CartDetails';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    //calculating cart price
    let vat = 0;
    let shippingCost = 0;
    if (cart.length > 0) {
        vat = 10;
        shippingCost = 5;
    }
    let totalPrice = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        totalPrice = totalPrice + element.price * cart[index].quantity;
    }
    totalPrice = totalPrice + vat + shippingCost;



    return (
        <div className='min-h-[70vh] flex flex-col items-center gap-3 py-3'>
            <div>
                {
                    cart.map(item => (
                        <CartDetails
                            allCart={item}
                            key={`${item.id}+${item.quantity}`}
                        ></CartDetails>
                    ))
                }
            </div>
            <div>
                <Link to={'/'}>
                    <button className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2 w-[200px]'>Add more item</button>
                </Link>
                <p className='font-semibold'>Vat/Tax: ${vat}</p>
                <p className='font-semibold'>Shipping Cost: ${shippingCost}</p>
                <p className='font-semibold'>Total Price: ${totalPrice.toFixed(2)}</p>
                <button className='bg-[#0C0032] text-white rounded-md px-3 py-1 my-2 w-[200px]'>Checkout your item</button>
            </div>
        </div>
    )
}

export default Cart