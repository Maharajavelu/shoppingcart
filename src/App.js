import React, { useState } from 'react';

import Product from './components/Product';
import Shopping from './components/Shopping Cart';
import Discount from './components/Discount';

function App() {
    // ProductData
    const products = [
        {
            "id": 1,
            "name": "Test Product 1",
            "price": 12.50,
            "tags": "TRADE A",
            "Vendor": "Vendor 5",
            "discount": 0
        },
        {
            "id": 2,
            "name": "Test Product 2",
            "price": 42.50,
            "tags": "TRADE B",
            "Vendor": "Vendor 4",
            "discount": 0
        },
        {
            "id": 3,
            "name": "Test Product 3",
            "price": 200.00,
            "tags": "TRADE C",
            "Vendor": "Vendor 3",
            "discount": 3
        },
        {
            "id": 4,
            "name": "Test Product 4",
            "price": 52.50,
            "tags": "TRADE C",
            "Vendor": "Vendor 2",
            "discount": 0
        },
        {
            "id": 5,
            "name": "Test Product 5",
            "price": 712.50,
            "tags": "TRADE D",
            "Vendor": "Vendor 1",
            "discount": 0
        },
        {
            "id": 6,
            "name": "Test Product 6",
            "price": 17.00,
            "tags": "TRADE A",
            "Vendor": "Vendor 3",
            "discount": 12
        },
        {
            "id": 7,
            "name": "Test Product 7",
            "price": 55.00,
            "tags": "TRADE A",
            "Vendor": "Vendor 3",
            "discount": 12
        },
        {
            "id": 8,
            "name": "Test Product 8",
            "price": 37.00,
            "tags": "TRADE D",
            "Vendor": "Vendor 4",
            "discount": 12
        },
        {
            "id": 9,
            "name": "Test Product 9",
            "price": 82.00,
            "tags": "TRADE C",
            "Vendor": "Vendor 4",
            "discount": 34
        },
        {
            "id": 10,
            "name": "Test Product 10",
            "price": 52.00,
            "tags": "TRADE B",
            "Vendor": "Vendor 2",
            "discount": 25
        },
        {
            "id": 11,
            "name": "Test Product 11",
            "price": 102.00,
            "tags": "TRADE B",
            "Vendor": "Vendor 1",
            "discount": 25

        },
        {
            "id": 12,
            "name": "Test Product 12",
            "price": 172.50,
            "tags": "TRADE B",
            "Vendor": "Vendor 4",
            "discount": 0
        },
        {
            "id": 13,
            "name": "Test Product 13",
            "price": 100.00,
            "tags": "TRADE D",
            "Vendor": "Vendor 5",
            "discount": 12
        },
        {
            "id": 14,
            "name": "Test Product 14",
            "price": 99.50,
            "tags": "TRADE D",
            "Vendor": "Vendor 5",
            "discount": 12
        },
        {
            "id": 15,
            "name": "Test Product 15",
            "price": 87.50,
            "tags": "TRADE A",
            "Vendor": "Vendor 5",
            "discount": 0
        },
        {
            "id": 16,
            "name": "Test Product 16",
            "price": 57.00,
            "tags": "TRADE A",
            "Vendor": "Vendor 1",
            "discount": 29
        },
        {
            "id": 17,
            "name": "Test Product 17",
            "price": 10.00,
            "tags": "TRADE C",
            "Vendor": "Vendor 2",
            "discount": 0
        },
        {
            "id": 18,
            "name": "Test Product 18",
            "price": 412.50,
            "tags": "TRADE D",
            "Vendor": "Vendor 3",
            "discount": 56
        },
        {
            "id": 19,
            "name": "Test Product 19",
            "price": 112.50,
            "tags": "TRADE B",
            "Vendor": "Vendor 4",
            "discount": 0
        },
        {
            "id": 20,
            "name": "Test Product 20",
            "price": 102.00,
            "tags": "TRADE B",
            "Vendor": "Vendor 5",
            "discount": 15
        },
        {
            "id": 21,
            "name": "Test Product 21",
            "price": 52.00,
            "tags": "TRADE A",
            "Vendor": "Vendor 3",
            "discount": 12
        },
        {
            "id": 22,
            "name": "Test Product 22",
            "price": 32.00,
            "tags": "TRADE C",
            "Vendor": "Vendor 2",
            "discount": 0
        },
        {
            "id": 23,
            "name": "Test Product 23",
            "price": 12.00,
            "tags": "TRADE B",
            "Vendor": "Vendor 4",
            "discount": 0
        },
        {
            "id": 24,
            "name": "Test Product 24",
            "price": 584.50,
            "tags": "TRADE D",
            "Vendor": "Vendor 1",
            "discount": 0
        },
        {
            "id": 25,
            "name": "Test Product 25",
            "price": 67.00,
            "tags": "TRADE D",
            "Vendor": "Vendor 5"
        },
        {
            "id": 26,
            "name": "Test Product 26",
            "price": 132.50,
            "tags": "TRADE A",
            "Vendor": "Vendor 5",
            "discount": 0
        },
        {
            "id": 27,
            "name": "Test Product 27",
            "price": 42.50,
            "tags": "TRADE B",
            "Vendor": "Vendor 2",
            "discount": 0
        }


    ];
//DiscountData
    const discountData = [{
        "Vendor": "Vendor 1",
        "TRADE A": 12,
        "TRADE B": 12,
        "TRADE C": null,
        "TRADE D": 6
    },
    {
        "Vendor": "Vendor 2",
        "TRADE A": 10,
        "TRADE B": 8,
        "TRADE C": 20,
        "TRADE D": null
    },
    {
        "Vendor": "Vendor 3",
        "TRADE A": null,
        "TRADE B": 25,
        "TRADE C": 3,
        "TRADE D": 16
    },
    {
        "Vendor": "Vendor 4",
        "TRADE A": 9,
        "TRADE B": null,
        "TRADE C": 16,
        "TRADE D": 30
    },
    {
        "Vendor": "Vendor 5",
        "TRADE A": 5,
        "TRADE B": 11,
        "TRADE C": null,
        "TRADE D": 30
    }];
    const [cart, setCart] = useState([]);

    // Define a calculateDiscount function
    function calculateDiscount(product) {
        const matchingVendor = discountData.find((row) => row["Vendor"] === product.Vendor);
        console.log('he:',matchingVendor[product.tags]);
        if (matchingVendor) {
            const tradeKey = product.tags;
            const discountPercentage = matchingVendor[tradeKey];
    
            if (discountPercentage !== null && !isNaN(discountPercentage)) {
                const discountedPrice = product.price - (product.price * discountPercentage) / 100;
    
                // console.log('Product Vendor:', product.Vendor);
                // console.log(`Vendor: ${product.Vendor}`);
                // console.log(`Trade: ${tradeKey}`);
                // console.log(`Discount Percentage: ${discountPercentage}`);
                // console.log(`Discounted Price: ${discountedPrice}`);
    
                return [discountPercentage, discountedPrice];
            } 
        } 
    
        // If no discount is found, return default values
        return [0, product.price];
    }
    

    const addToCart = (product) => {
        const [discountPercentage, discountedPrice] = calculateDiscount(product);
        const productWithDiscount = { ...product, discount: discountPercentage, discountedPrice };
        setCart([...cart, productWithDiscount]);

        // console.log(`Added to Cart: ${product.name}`);
        // console.log(`Vendor: ${product.Vendor}`);
        // console.log(`Trade: ${product.tags}`);
        // console.log(`Discount Percentage: ${discountPercentage}`);
        // console.log(`Discounted Price: ${discountedPrice}`);
    }




    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    }

    return (
        <div className="App">
            <Discount discountData={discountData} />

            <div className="Products">
                <h2 className='header'>Product Table</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Tags</th>
                            <th>Vendor</th>
                            <th>Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <Shopping cart={cart} removeFromCart={removeFromCart} calculateDiscount={calculateDiscount} />
        </div>
    );
}

export default App;
