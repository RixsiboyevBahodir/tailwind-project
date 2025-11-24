import AlbaImg from '../assets/images/important/alba.svg'

export default function Alba() {
    return (
        <div className='flex'>
            <div className='text-right p-[50px]'>
                <p className='text-[14px] text-red-500 pb-5'>New Favorite!</p>
                <p className="roboto font-bold text-[32px]">Alada</p>
                <p className='text-[18px] pb-[23px] pt-[7px] text-base/7'>Floating folding desk</p>
                <p className='text-[15px]'>From $353</p>
                <p className='text-[18px] pt-[17px] pb-2 text-gray-600'>A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.</p>
                <p className='pb-[66px] text-gray-600'>+ 4 color finishes</p>
                <a href="" className='text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={AlbaImg} alt="" className='w-[75%]' />
        </div>
    )
}
