import Star from '../assets/imgs/Star.svg'
import StarFull from '../assets/imgs/Star_fill.svg'

const Item = ({name, image, price, rating, votes, popular, available}) => {
  return (
    <>
        <div>
            <div>
                { popular && (
                    <p className='popular text-black-custom'>Popular</p>
                )}
                <img 
                    src={image} 
                    alt="Photo about the coffee that" 
                    className='rounded-xl w-full h-auto'
                />
            </div>

            <div className="flex justify-between mt-3">
                <p className='text-white-custom font-medium text-sm'>{name}</p>
                <p className="price py-1 px-2 text-black-custom bg-yellow-custom rounded-md font-bold text-xs">{price}</p>
            </div>

            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    <img src={rating ? StarFull : Star} alt="rating star"/>
                    <p className='text-white-custom ml-1 text-sm'>{rating === 5 ? `${rating}.0` : rating} <span className='text-color'>{votes ? `(${votes} votes)` : 'No ratings'}</span></p>
                </div>
                <p className='text-red-custom sold-out text-sm'>{ !available && 'Sold out'}</p>
            </div>
        </div>
    </>
  )
}

export default Item