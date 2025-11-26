import aboutImg from '../assets/images/important/aboutLogo.svg'

export default function AboutUs() {
    return (
        <div className='flex flex-col items-center pb-[82px]' >
            <p className='font-normal text-[20px] pb-10 text-center' >Those who are talking about us...</p>
            <img src={aboutImg} alt="" />
        </div>
    )
}
