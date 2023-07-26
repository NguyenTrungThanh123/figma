import React from 'react';
import { useSelector } from "react-redux";
import ProductItem from './ProductItem';


const ProductList  = () =>  {
    const products = useSelector((state) =>{
                return  state.products;
    })
    
    
    return (
        <div className='product-list'>
                {
                    products.map((product) => ( 
                        <ProductItem id  = {product.id} 
                                     nameProduct = {product.name}
                                     descProduct = {product.desc}
                                     priceProduct = {product.price}
                        />
                    ))
                }
        </div>
    )


}


export default ProductList;