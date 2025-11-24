import headerImg from '../../assets/images/hero/headerImg.svg'

export default function Header() {
    return (
        <div style={{ backgroundImage: `url(${headerImg})` }} className='flex items-center justify-center min-h-[85vh] flex-col gap-8 mt-[18px] bg-no-repeat bg-cover relative'>
            <h1 className='roboto text-3xl font-bold text-white max-w-[60%] text-center'>Furniture designed to live in harmony, creating distinctive and timeless spaces</h1>
            <button className=' border-2 text-white px-10 text-[20px] cursor-pointer'>Discover now</button>
            <div className='bg-black text-white py-1.5 px-4 absolute bottom-0 left-0'>Do you know what is your decor style?</div>
        </div>
    )
}
