import { IoHomeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    return (
        <div className="flex items-center m-[18px] justify-between border-b-black">
            <div className="md:flex gap-6 hidden ">
                <a href="" className="hover:text-amber-800 transition-all">Wooden Furniture</a>
                <a href="" className="hover:text-amber-800 transition-all">About</a>
                <a href="" className="hover:text-amber-800 transition-all">Stories</a>
            </div>
            <img src="/logo.svg" alt="" />
            <div className="flex gap-6">
                <IoHomeOutline className="hidden md:block text-2xl cursor-pointer hover:text-amber-800 transition-all" />
                <FiUserPlus className="hidden md:block text-2xl cursor-pointer hover:text-amber-800 transition-all" />
                <AiOutlineShoppingCart className="hidden md:block text-2xl cursor-pointer hover:text-amber-800 transition-all" />
                <RxHamburgerMenu className=" md:hidden text-2xl cursor-pointer hover:text-amber-800 transition-all" />
            </div>
        </div>
    )
}
