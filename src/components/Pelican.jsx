import PelicanImg from '../assets/images/important/pelicanImg.svg'

export default function Pelican() {
    return (
        <div className='flex my-[30px]'>
            <img src={PelicanImg} alt="" className='w-[75%]' />
            <div className='p-[50px]'>
                <p className="roboto font-bold text-[32px]">Pelican</p>
                <p className='text-[18px] pb-[23px] pt-[7px] text-base/7'>Shelves with hidden hooks</p>
                <p className='text-[15px]'>From $89</p>
                <p className='text-[18px] pb-3 pt-[17px] text-gray-600'>Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch.</p>
                <p className='pb-[66px] text-gray-600'>+ 3 sizes, + 5 color finishes</p>
                <a href="" className='text-[15px] underline decoration'>Shop now</a>
            </div>
        </div>
    )
}
