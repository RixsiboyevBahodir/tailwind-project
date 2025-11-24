import { IoHomeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
    return (
        <div className="flex items-center m-[18px] justify-between border-b-black">
            <div className="flex gap-6">
                <a href="" className="hover:text-amber-800 transition-all">Wooden Furniture</a>
                <a href="" className="hover:text-amber-800 transition-all">About</a>
                <a href="" className="hover:text-amber-800 transition-all">Stories</a>
            </div>
            <img src="/logo.svg" alt="" />
            <div className="flex gap-6">
                <IoHomeOutline className="text-2xl cursor-pointer hover:text-amber-800 transition-all" />
                <FiUserPlus className="text-2xl cursor-pointer hover:text-amber-800 transition-all" />
                <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-amber-800 transition-all" />
            </div>
        </div>
    )
}
