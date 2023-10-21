import React from 'react';
import '../index.css';

function Shopping({ cart, removeFromCart}) {
  
  // Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.discountedPrice, 0);


  return (
    <div className="Shopping">
      <h2 className="header">Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Original Price</th>
            <th>Discount Percentage</th>
            <th>Discounted Price</th>
            <th>Vendor</th>
            <th>Cart</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {

            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.discount}%</td>
                <td>{product.discountedPrice}</td>
                <td>{product.Vendor}</td>
                <td>
                  <button onClick={() => removeFromCart(product)}>Remove Cart</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">
        <h2>Total Price: Rs.{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Shopping;
