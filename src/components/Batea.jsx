import BateaImg from '../assets/images/important/batea.svg'

export default function Batea() {
    return (
        <div className='flex'>
            <div className='text-right p-[50px]'>
                <p className="roboto font-bold text-[32px]">Batea Collection</p>
                <p className='text-[18px] pb-[23px] pt-[7px] text-base/7'>Batea Collection</p>
                <p className='text-[15px]'>From $272</p>
                <p className='text-[18px] pb-4 pt-[17px] text-gray-600'>Composed of clean and rounded lines, the Batea Collection includes unique tables with extra functionality like a removable tray, and hidden storage.</p>
                <p className='pb-[66px] text-gray-600'>+ 3 sizes, + 6 color finishes</p>
                <a href="" className='text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={BateaImg} alt="" className='w-[75%]' />
        </div>
    )
}
