import React from 'react';
import '../index.css';

function Discount({ discountData }) {
  return (
    <div className="discount">
      <h2 className='header'>Discount Table</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Trade A</th>
            <th>Trade B</th>
            <th>Trade C</th>
            <th>Trade D</th>
          </tr>
        </thead>
        <tbody>
          {discountData.map((vendorInfo, index) => (
            <tr key={index}>
              <td>{vendorInfo["Vendor"]}</td>
              <td>{vendorInfo["TRADE A"] || 'N/A'}</td>
              <td>{vendorInfo["TRADE B"] || 'N/A'}</td>
              <td>{vendorInfo["TRADE C"] || 'N/A'}</td>
              <td>{vendorInfo["TRADE D"] || 'N/A'}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Discount;
