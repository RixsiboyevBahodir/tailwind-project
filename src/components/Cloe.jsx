import CloeImg from '../assets/images/important/cloeImg.svg'

export default function Cloe() {
    return (
        <div className='grid sm:grid-cols-2 mb-5 md:grid-cols-3'>
            <img src={CloeImg} alt="" className='md:col-span-2 w-full hidden sm:block' />
            <div className='text-left col-span-1 sm:pt-0 p-[5%] xl:p-[50px]'>
                <p className="roboto font-bold text-xl lg:text-[32px] text-amber-800">Cloe</p>
                <p className=' text-[12px] md:text-[18px] md:pt-[7px] text-base/7 sm:pb-0 md:pb-4 lg:pb-[23px]'>Modular Storage System</p>
                <p className='text-[10px] md:text-[15px]'>From $1.176</p>
                <p className='md:pb-4 text-[14px] sm:text-[12px] lg:text-[18px] lg:pb-[66px] lg:pt-[17px] lg:text-gray-600'>An expansive way to furnish your space exactly how you need it and like it. Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.</p>
                <a href="" className='text-[10px] lg:text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={CloeImg} alt="" className='md:col-span-2 w-full sm:hidden'/>
        </div>
    )
}
