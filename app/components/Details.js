import Image from 'next/image';
import React from 'react';

function Details() {
  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/*left*/}
        <div className="shadow-md relative h-96 overflow-hidden aspect-ratio-1">
          <Image
            src="/paintings/painting.jpg"
            layout="fill"
            objectFit="cover"
            alt="art"
          />
        </div>
         {/*right*/}
        <div className="flex flex-col p-6 justify-between">
          <h1 className="text-3xl font-semibold text-[#5B20B6]">Versailles Palace</h1>
          <p className="text-lg text-gray-500 mt-4">Michael Angelo's Versailles Painting of the palace ceiling</p>

          <div className="mt-5">
            {/* Additional details can be added here */}
            <span className="text-[#5B20B6] text-xl font-semibold">$99.99</span>
          </div>

          <div className='mt-6 flex flex-col text-gray-500'>
            <label className='ml-2' htmlFor="">Qty</label>
           <input type="number" defaultValue={1} className="w-20 px-4 h-10 border border-gray-300 rounded-md" />
          </div>

          <div className='mt-6'>
            <button className='bg-[#5B20B6] text-white px-6 py-3 rounded-md'>Add to Cart</button>
          </div>

        </div>


      </div>
    </div>
  );
}

export default Details;
