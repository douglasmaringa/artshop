import Image from "next/image"
import { FaShoppingCart } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF]">
        <div className="max-w-7xl mx-auto flex justify-between">

        <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <h1 className="ml-2 text-2xl lg:text-3xl font-bold">Artistry Market</h1>
        </div>
         
        <div className="flex items-center relative">
             <FaShoppingCart className="text-3xl text-[#5B20B6] cursor-pointer hover:scale-125 transition-transform duration-300" />
            <div className="ml-2 mr-4 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs font-semibold">
                 1
            </div>
            <UserButton afterSignOutUrl="/"/>
        </div>

        </div>
    </div>
  )
}

export default Header