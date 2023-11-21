import Image from "next/image";

function Card() {
  return (
    <div className="relative shadow-md max-w-sm cursor-pointer">
      <div className="relative h-96 overflow-hidden aspect-ratio-1 hover:scale-105 transition-transform duration-300">
        <Image
          src="/paintings/painting.jpg"
          layout="fill"
          objectFit="cover"
          alt="art"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-[#5B20B6] hover:text-[#441583] text-3xl font-semibold">Versailles Palace</h1>
        <p className="text-xl text-gray-500 truncate">Michael Angelo's Versailles Painting of the palace ceiling</p>
        <br/>
        <br/>
      </div>

      {/* Sticky Price Tag - Outside the Card Container */}
      <div className="absolute bottom-0 right-0 p-2 bg-[#F5F3FF] shadow-md">
        <span className="text-[#5B20B6] text-lg font-semibold">$99.99</span>
      </div>
    </div>
  );
}

export default Card;
