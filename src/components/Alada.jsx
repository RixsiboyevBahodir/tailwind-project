import AladaImg from '../assets/images/important/alada.svg'
import advertisement from '../assets/images/important/advertisement.svg'

export default function Alada() {
    return (
        <div className='flex my-[30px]'>
            <img src={AladaImg} alt="" className='w-[75%]' />
            <div className='p-[50px]'>
                <p className="roboto font-bold text-[32px]">Alba Collection</p>
                <p className='text-[18px] pb-[23px] pt-[7px] text-base/7'>Modular bedside table & shelf</p>
                <p className='text-[15px]'>From $89</p>
                <p className='text-[18px] pb-3 pt-[17px] text-gray-600'>A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.</p>
                <p className='pb-[66px] text-gray-600'>+ 3 sizes, + 5 color finishes</p>
                <a href="" className='text-[15px] underline decoration'>Shop now</a>
                <img src={advertisement} alt="" className='pt-8' />
            </div>
        </div>
    )
}
