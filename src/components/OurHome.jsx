import ourHomeOne from '../assets/images/important/ourHome1.svg'
import ourHomeTwo from '../assets/images/important/ourHome2.svg'
import ourHomeThree from '../assets/images/important/ourHome3.svg'

export default function OurHome() {
    return (
        <div className='flex flex-col items-center pt-14'>
            <h1 className='text-[32px] font-bold pb-5'>Our pieces inside your home</h1>
            <p className='text-[18px] pb-9'>Get inspired by our products in real-life. Tag us and be featured!</p>
            <div className='flex gap-3'>
                <img src={ourHomeOne} alt="Home card img" />
                <img src={ourHomeTwo} alt="Home card img" />
                <img src={ourHomeThree} alt="Home card img" />
            </div>
            <ul className='flex gap-1 pt-5'>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
                <li className='w-2 h-2 bg-black'></li>
            </ul>
            <div className='mt-[135px] mb-[95px ] flex flex-col items-center'>
                <div className='flex flex-col items-center  px-[12%] gap-[37px]'>
                    <p className='text-center'>"The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would definitely recommend friends to order from Woodendot!"</p>
                    <p>R. Aoun, United Kingdom</p>
                </div>
                <ul className='flex gap-1 pt-5'>
                    <li className='w-2 h-2 bg-black'></li>
                    <li className='w-2 h-2 bg-black'></li>
                    <li className='w-2 h-2 bg-black'></li>
                    <li className='w-2 h-2 bg-black'></li>
                    <li className='w-2 h-2 bg-black'></li>
                    <li className='w-2 h-2 bg-black'></li>
                </ul>
            </div>
        </div>
    )
}
