import React, { useContext, useEffect } from 'react'
import SingleProduct from './SingleProduct'
import { ProductContext } from '../App'

const AllProducts = () => {
    const [products, setProducts] = useContext(ProductContext);
    //Called api for data
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='section-1' className='bg-white grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 p-5' >
            {
                products.map((item) => (
                    <SingleProduct product={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default AllProducts