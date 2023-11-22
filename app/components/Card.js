import Image from "next/image";
import Link from 'next/link'

function Card({product}) {
  return (
    <Link href={`/details/${product?.slug}`}>
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
       
        <Image
          src={product?.image}
          layout="fill"
          objectFit="cover"
          alt="art"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-[#5B20B6] hover:text-[#441583] text-3xl font-semibold">{product?.name}</h1>
       
        <p className="text-xl text-gray-500 truncate">{product?.description}</p>
        <br/>
        <br/>
      </div>

      {/* Sticky Price Tag - Outside the Card Container */}
      <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
        <span className="text-[#5B20B6] text-lg font-semibold">${product?.price}</span>
      </div>
    </div>
    </Link>
  );
}

export default Card;
