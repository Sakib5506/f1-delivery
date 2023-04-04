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
        <div className='bg-white h-screen grid grid-rows-4 grid-flow-col gap-4' >
            {
                products.map((item) => (
                    <SingleProduct products={products} key={item.id} />
                ))
            }
        </div>
    )
}

export default AllProducts