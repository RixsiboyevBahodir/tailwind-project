import carImg from '../assets/images/features/car.svg'
import coin from '../assets/images/features/coin.svg'
import map from '../assets/images/features/map.svg'
import tree from '../assets/images/features/tree.svg'

export default function CardInfo() {
    return (
        <div className='flex items-center justify-between gap-16 py-11 px-15'>
            <div className='flex cantiner gap-12'>
                <div className='flex items-center gap-3'>
                    <img src={carImg} alt="car-img" />
                    <p>Free Shipping</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={coin} alt="car-img" />
                    <p>Free Shipping</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={map} alt="car-img" />
                    <p>Free Shipping</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={tree} alt="car-img" />
                    <p>Free Shipping</p>
                </div>
            </div>
            <p>4.8 Star Reviews</p>
        </div>
    )
}
