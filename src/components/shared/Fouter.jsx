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
            <div className="px-[10%] py-10">
                <div className="flex w-full justify-between ">
                    <div className=" grid grid-cols-3 gap-20 w-2/3">
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">About</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="">About Us</a>
                                <a href="">Design</a>
                                <a href="">Sustainability</a>
                                <a href="">We plant trees</a>
                                <a href="">Our Story</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">Help</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="">Holiday Offers FAQ</a>
                                <a href="">FAQ</a>
                                <a href="">Warranty</a>
                                <a href="">We plant trees</a>
                                <a href="">Our Story</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="pb-6 uppercase font-bold text-2lx">More</h4>
                            <div className="flex flex-col items-center gap-1.5">
                                <a href="">Where to find us</a>
                                <a href="">FAQ</a>
                                <a href="">Warranty</a>
                                <a href="">We plant trees</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p>Don’t miss any news and exclusive offers!</p>
                        <button className="bg-white border px-8">Newsletter subscripite</button>
                        <div className='flex'>
                            <img src={fscImg} alt="" />
                            <img src={oneTree} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center'>
                                <FaStar size={24} className='bg-green-400 p-1 text-white'/>
                                <FaStar size={24} className='bg-green-400 p-1 text-white'/>
                                <FaStar size={24} className='bg-green-400 p-1 text-white'/>
                                <FaStar size={24} className='bg-green-400 p-1 text-white'/>
                                <FaStarHalf size={24} className='bg-green-400 p-1 text-white' />
                            </div>
                            <div className='flex items-center'>
                                <FaStar size={22} className='text-green-400'/>
                                <p>Trustpilot</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex px-[10%] justify-between pb-10'>
                <p>© Copyright – WOODENDOT 2021</p>
                <div className='flex'>
                    <img src={visaImg} alt="" />
                    <img src={masterImg} alt="" />
                    <img src={klarnaImg} alt="" />
                    <img src={paypalImg} alt="" />
                </div>
                <p>Terms & Conditions | Privacy Policy & Cookies</p>
            </div>
        </footer>
    )
}
