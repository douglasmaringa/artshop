import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Order() {
  const products = [
    { id: 1, name: 'Product 1', quantity: 2, paid: 29.99,status:'Delivered' },
    { id: 2, name: 'Product 2', quantity: 1, paid: 19.99 ,status:'Shipping'},
    // Add more products as needed
  ];

  
  return (
    <div className='max-w-3xl mx-auto mt-20'>
      <h1 className="text-3xl text-center font-semibold text-[#5B20B6] mb-6">Your Orders</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-[#5B20B6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Paid</th>
            <th className="py-2 px-4">Status</th>
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
              <td className="py-2 px-4">${product.paid}</td>
              <td className="py-2 px-4">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
}

export default Order;
