import CloeImg from '../assets/images/important/cloeImg.svg'

export default function Cloe() {
    return (
        <div className='flex'>
            <div className='text-right p-[50px]'>
                <p className="roboto font-bold text-[32px]">Cloe</p>
                <p className='text-[18px] pb-[23px] pt-[7px] text-base/7'>Modular Storage System</p>
                <p className='text-[15px]'>From $1.176</p>
                <p className='text-[18px] pb-[66px] pt-[17px] text-gray-600'>An expansive way to furnish your space exactly how you need it and like it. Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.</p>
                <a href="" className='text-[15px] underline decoration'>Shop now</a>
            </div>
            <img src={CloeImg} alt="" className='w-[75%]' />
        </div>
    )
}
