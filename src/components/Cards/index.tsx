import { CardProps } from "../../types"

type DestinationsProps = {
  destination: CardProps
  key: number
}
export const Card = (destinantion: DestinationsProps) => {
  const { image, name, duration, price, location } = destinantion.destination
  return (
    <div className='popular-destinantion-card'>
        <img className='card-image' src={image} alt="card1" />
        <div className='popular-destinantion-card-text'>
          <p className='location-text'>
            {/* <img className='icons' src={loaction} alt="Location" /> */}
            <span>{location}</span>
          </p>
          <h3>
            {name}
          </h3>
          <p>
            {duration}
          </p>
          <p>
            {price}
          </p>

          {/* <h4>
            Victoria Falls
          </h4>
          <p>
            The Victoria Falls is a waterfall in southern Africa on the Zambezi River at the border between Zambia and Zimbabwe.
          </p> */}
        </div>
      </div>
  )
}