import { createSlice } from "@reduxjs/toolkit";


export const ProductReducer = createSlice({
        name : 'Product',
        initialState : [],
        reducers  :{
            addProduct :  (state, action) => {
                    const newProduct = {
                            id: new Date(),
                            name: action.payload.product,
                            desc: action.payload.description,
                            price: action.payload.price
                    }
                    state.push(newProduct);

            },
            deleteProduct : (state, action) => { 
                return state.filter(x => x.id === action.payload.id)
        }
        
    }

});

export const    {addProduct, deleteProduct} = ProductReducer.actions;
export default  ProductReducer.reducer;