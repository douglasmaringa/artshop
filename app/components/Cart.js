import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const products = [
    { id: 1, name: 'Product 1', quantity: 2, price: 29.99 },
    { id: 2, name: 'Product 2', quantity: 1, price: 19.99 },
    // Add more products as needed
  ];

  // Calculate the total price
  const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Cart</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]">
              <td className="py-2 px-4 flex items-center">
                <Image className='mr-2' src="/paintings/painting.jpg" width={50} height={30} alt="art" />
                {product.name}
              </td>
              <td className="py-2 px-4">{product.quantity}</td>
              <td className="py-2 px-4">${(product.price * product.quantity).toFixed(2)}</td>
              <td className="py-2 px-4">
                <FaTrash className="text-[#5B20B6] mx-auto cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Section */}
      <div className="mt-4 text-[#5B20B6] ml-auto">
        <p className="text-lg font-semibold text-right mr-4">Total: ${total.toFixed(2)}</p>
      </div>

      <div className="mt-6 text-[#5B20B6] max-w-sm mx-auto space-y-4">
           <button className="text-lg w-full font-semibold text-center mr-4 bg-[#5B20B6]  text-white py-2 px-4 rounded hover:text-[#5B20B6] hover:bg-white border border-[#5B20B6]">
            Checkout
          </button>  

          <button className="text-lg w-full font-semibold text-center mr-4 bg-white hover:bg-[#5B20B6] hover:text-white text-[#5B20B6] border border-[#5B20B6] py-2 px-4 rounded">
            Back to Shopping
          </button>    
     </div>
    </div>
  );
}

export default Cart;
