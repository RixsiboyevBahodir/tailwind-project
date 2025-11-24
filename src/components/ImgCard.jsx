import imageOne from '../assets/images/features/image1.svg'
import imageTwo from '../assets/images/features/image2.svg'
import imageThree from '../assets/images/features/image3.svg'
import imageFour from '../assets/images/features/image4.svg'

export default function ImgCard() {
    return (
        <div className='flex pb-30'>
            <img src={imageOne} alt="" className='w-[25%]' />
            <img src={imageTwo} alt="" className='w-[25%]' />
            <img src={imageThree} alt="" className='w-[25%]' />
            <img src={imageFour} alt="" className='w-[25%]' />
        </div>
    )
}
