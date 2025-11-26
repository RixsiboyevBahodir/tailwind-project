import AladaImg from '../assets/images/important/alada.svg'

export default function Alada() {
    return (
        <div className='grid sm:grid-cols-2 mb-5 md:grid-cols-3'>
            <div className='text-right col-span-1 sm:pt-0 p-[5%] xl:p-[50px]'>
                <p className="roboto font-bold text-xl lg:text-[32px] lg:text-amber-800">Alada</p>
                <p className=' text-[12px] md:text-[18px] md:pt-[7px] text-base/7 sm:pb-0 md:pb-4 lg:pb-[23px]'>Modular bedside table & shelf</p>
                <p className='text-[10px] md:text-[15px]'>From $89</p>
                <p className='md:pb-4 text-[14px] sm:text-[12px] lg:text-[18px] lg:pb-[66px] lg:pt-[17px] lg:text-gray-600'>A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.</p>
                <a href="" className='text-[10px] lg:text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={AladaImg} alt="" className='md:col-span-2 w-full' />
        </div>
    )
}
