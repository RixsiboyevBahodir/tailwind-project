import fscImg from '../../assets/images/important/fsc.svg'
import oneTree from '../../assets/images/important/oneTree.svg'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import visaImg from '../../assets/images/important/visa.svg'
import masterImg from '../../assets/images/important/master.svg'
import klarnaImg from '../../assets/images/important/klarna.svg'
import paypalImg from '../../assets/images/important/paypal.svg'

export default function Fouter() {
    return (
        <footer className="bg-gray-200">
            <div className="lg:px-[10%] py-10">
                <div className="flex flex-col gap-10 w-full items-center justify-between md:flex-row">
                    <div className=" grid sm:grid-cols-3 lg:gap-20 w-2/3">
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">About</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="" className='hover:text-amber-800 transition-all' >About Us</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Design</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Sustainability</a>
                                <a href="" className='hover:text-amber-800 transition-all' >We plant trees</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Our Story</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">Help</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="" className='hover:text-amber-800 transition-all' >Holiday Offers FAQ</a>
                                <a href="" className='hover:text-amber-800 transition-all' >FAQ</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Warranty</a>
                                <a href="" className='hover:text-amber-800 transition-all' >We plant trees</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Our Story</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">More</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="" className='hover:text-amber-800 transition-all' >Where to find us</a>
                                <a href="" className='hover:text-amber-800 transition-all' >FAQ</a>
                                <a href="" className='hover:text-amber-800 transition-all' >Warranty</a>
                                <a href="" className='hover:text-amber-800 transition-all' >We plant trees</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p>Don’t miss any news and exclusive offers!</p>
                        <button className="bg-white border px-3 lg:px-8 cursor-pointer hover:border-white hover:bg-gray-200 hover:text-white transition-all">Newsletter subscripite</button>
                        <div className='flex'>
                            <img src={fscImg} alt="" />
                            <img src={oneTree} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <FaStar size={24} className='bg-green-400 p-1 text-white' />
                                <FaStar size={24} className='bg-green-400 p-1 text-white' />
                                <FaStar size={24} className='bg-green-400 p-1 text-white' />
                                <FaStar size={24} className='bg-green-400 p-1 text-white' />
                                <FaStarHalf size={24} className='bg-green-400 p-1 text-white' />
                            </div>
                            <div className='flex items-center'>
                                <FaStar size={22} className='text-green-400' />
                                <p>Trustpilot</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 px-[10%] justify-between pb-10 md:flex-row'>
                <p>© Copyright – WOODENDOT 2021</p>
                <div className='flex gap-1 flex-col sm:flex-row'>
                    <img src={visaImg} alt="" className='max-w-[66px]' />
                    <img src={masterImg} alt="" className='max-w-[66px]' />
                    <img src={klarnaImg} alt="" className='max-w-[66px]' />
                    <img src={paypalImg} alt="" className='max-w-[66px]' />
                </div>
                <p className='text-center'>Terms & Conditions | Privacy Policy & Cookies</p>
            </div>
        </footer>
    )
}
