import PelicanImg from '../assets/images/important/pelicanImg.svg'

export default function Pelican() {
    return (
        <div className='grid sm:grid-cols-2 mb-5 md:grid-cols-3'>
            <div className='text-right col-span-1 sm:pt-0 p-[5%] xl:p-[50px]'>
                <p className="roboto font-bold text-xl lg:text-[32px] lg:text-amber-800">Pelican</p>
                <p className=' text-[12px] md:text-[18px] md:pt-[7px] text-base/7 sm:pb-0 md:pb-4 lg:pb-[23px]'>Shelves with hidden hooks</p>
                <p className='text-[10px] md:text-[15px]'>From $89</p>
                <p className='md:pb-4 text-[14px] sm:text-[12px] lg:text-[18px] lg:pb-[66px] lg:pt-[17px] lg:text-gray-600'>Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch.</p>
                <a href="" className='text-[10px] lg:text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={PelicanImg} alt="" className='md:col-span-2 w-full' />
        </div>
    )
}
