import DesignImg from '../assets/images/important/Design.svg'
import FootprintImg from '../assets/images/important/footprint.svg'
import MadeImg from '../assets/images//important/made.svg'
import WoodImg from '../assets/images/important/wood.svg'

export default function PartnerCard() {
    return (
        <div className="my-25 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 py-8 flex flex-col items-center">
                <img src={DesignImg} alt="" className='max-w-[95px] pb-[30px]' />
                <p className='pb-3 font-bold text-2xl' >DESIGN</p>
                <p className='text-center font-normal text-[15px] pb-[33px]'>We create furniture pieces with personality, designed to transform your space.</p>
                <a href="">Learn More</a>
            </div>
            <div className="p-4 py-8 flex flex-col items-center">
                <img src={FootprintImg} alt="" className='max-w-[95px] pb-[30px]' />
                <p className='pb-3 font-bold text-2xl' >FOOTPRINT</p>
                <p className='text-center font-normal text-[15px] pb-[33px]'>We are committed to look after what we love, nature.</p>
                <a href="">Learn More</a>
            </div>
            <div className="p-4 py-8 flex flex-col items-center">
                <img src={MadeImg} alt="" className='max-w-[95px] pb-[30px]' />
                <p className='pb-3 font-bold text-2xl' >MADE</p>
                <p className='text-center font-normal text-[15px] pb-[33px]'>Our local design, and production in the village of Iscar, Spain.</p>
                <a href="">Learn More</a>
            </div>
            <div className="p-4 py-8 flex flex-col items-center">
                <img src={WoodImg} alt="" className='max-w-[95px] pb-[30px]' />
                <p className='pb-3 font-bold text-2xl' >WOOD</p>
                <p className='text-center font-normal text-[15px] pb-[33px]'>Our characteristic and main material, and its unique and timeless attributes.</p>
                <a href="">Learn More</a>
            </div>
        </div>
    )
}
