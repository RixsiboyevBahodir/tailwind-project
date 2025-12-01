import AlbaImg from '../assets/images/important/alba.svg'

export default function Alba() {
    return (
        <div className='grid sm:grid-cols-2 mb-5 md:grid-cols-3'>
            <img src={AlbaImg} alt="" className='md:col-span-2 w-full hidden sm:block' />
            <div className='text-left col-span-1 sm:pt-0 p-[5%] xl:p-[50px]'>
                <p className="roboto font-bold text-xl lg:text-[32px] text-amber-800">Alba</p>
                <p className=' text-[12px] md:text-[18px] md:pt-[7px] text-base/7 sm:pb-0 md:pb-4 lg:pb-[23px]'>Floating folding desk</p>
                <p className='text-[10px] md:text-[15px]'>From $353</p>
                <p className='md:pb-4 text-[14px] sm:text-[12px] lg:text-[18px] lg:pb-[66px] lg:pt-[17px] lg:text-gray-600'>A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.</p>
                <a href="" className='text-[10px] lg:text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={AlbaImg} alt="" className='md:col-span-2 w-full block sm:hidden' />
        </div>
    )
}
