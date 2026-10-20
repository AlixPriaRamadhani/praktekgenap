// components/header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white h-22 flex items-center px-4 text-black">
      <Image src="/logoslank.jpg" alt="logo" width={300} height={300} className="h-20 w-auto mr-25" />
      <div className="border-2 border-gray-300 rounded-full px-4 py-2 text-gray-400 w-220 flex items-center mr-20">
        <Image src="/search.png" alt="search" width={20} height={20} className="inline-block mr-2" />
        <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none" />
      </div>
      <div className="relative">
        <Image src="/keranjang.png" alt="user" width={20} height={20} className="mr-15" />
      </div>
      <div className="h-6 w-px bg-gray-300 mr-13" />
      <div className="flex items-center gap-3">
        <button className="px-6 py-2 rounded-full border-2 border-gray-600 text-gray-600 font-medium text-sm hover:bg-gray-100 transition-colors">
          Masuk
        </button>
        <button className="px-6 py-2 rounded-full bg-gray-600 text-white font-medium text-sm hover:bg-gray-200 transition-colors">
          Daftar
        </button>
      </div>
    </div>
  );
}