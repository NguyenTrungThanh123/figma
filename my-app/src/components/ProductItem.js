import React from 'react';
import { useDispatch } from "react-redux";

const ProductItem = ({id, ...props}) => {
        const dispatch = useDispatch();
        return (
            <li className='task-item'>
                    <div>
                          {...props};
                    </div>
            </li>
        )

}

export default ProductItem;