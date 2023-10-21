import React from 'react';
import '../index.css';

function Product({ product, addToCart }) {
    const handleAddToCart = () => {
        addToCart(product);
    }
    return (

        <tr className='Product'>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.tags}</td>
            <td>{product.Vendor}</td>
            <td className='button'><button onClick={handleAddToCart}>Add to Cart</button></td>
        </tr>


    )
}

export default Product;
