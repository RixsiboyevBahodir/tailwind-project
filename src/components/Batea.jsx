import BateaImg from '../assets/images/important/batea.svg'

export default function Batea() {
    return (
        <div className='grid sm:grid-cols-2 mb-5 md:grid-cols-3'>
            <img src={BateaImg} alt="" className='md:col-span-2 w-full hidden sm:block' />
            <div className='text-left col-span-1 sm:pt-0 p-[5%] xl:p-[50px]'>
                <p className="roboto font-bold text-xl lg:text-[32px] text-amber-800">Batea Collection</p>
                <p className=' text-[12px] md:text-[18px] md:pt-[7px] text-base/7 sm:pb-0 md:pb-4 lg:pb-[23px]'>Batea Collection</p>
                <p className='text-[10px] md:text-[15px]'>From $272</p>
                <p className='md:pb-4 text-[14px] sm:text-[12px] lg:text-[18px] lg:pb-[66px] lg:pt-[17px] lg:text-gray-600'>Composed of clean and rounded lines, the Batea Collection includes unique tables with extra functionality like a removable tray, and hidden storage.</p>
                <a href="" className='text-[10px] lg:text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={BateaImg} alt="" className='md:col-span-2 w-full sm:hidden block' />
        </div>
    )
}
