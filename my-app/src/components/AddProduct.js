import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addProduct } from '../redux/ProductReducer';


const AddProduct = () => {
        const [product, setProduct] = useState('');

        const dispatch = useDispatch();

        const onsubmit = (event) =>{
                event.preventDefault();

                if(product.trim().length === 0) {
                    alert("Enter a product before adding !!");
                    setProduct("");
                    return;
                
                }
                dispatch(addProduct(
                    {
                        product: product
                    }
                ));

        }

        return (
                <div className='add-product'>
                    <input 
                        type='text'
                        className='product-input'
                        placeholder='add product'
                        value={product}
                        onChange={(event) => setProduct(event.target.value) }
                    />
                    <button onClick={onsubmit}>Add product</button>
                
                
                
                
                
                
                
                </div>

        )


}    

export default AddProduct;