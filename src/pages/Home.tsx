import '../App.css';
import { images, icons } from '../assets';
import { Card } from '../components/Cards';
import { Destinations } from '../data/Destinations';


export const HomePage = () => {
  return (
    <main>
    <section className='home-section'>
      <nav className='main-nav'>
        <div>
          <h2>Traveller!</h2>
        </div>
        <div>
          <ul className='nav-links-container'>
            <li>Products</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <button className='cta-button'>Sign Up</button>
        </div>
      </nav>

      <div className='hero-section'>
        <div className='hero-text'>
          <h4 className='hero-header'>
            Start your journey
            by one click, explore beautiful world!
          </h4>
          <p className='sub-header-text'>
            Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!
          </p>
          <ul className='download-icons'>
            <li>
              <a href="#!">
                <img src={images.playstore} alt='google-play' />
              </a>
            </li>
            <li>
              <a href="#!">
                <img src={images.appleStore} alt='app-store' />
              </a>
            </li>
          </ul>
        </div>
        <div className='hero-image'>
          <img src={images.heroImg} alt="hero section" />
        </div>
      </div>

    </section>

    <section className='popular-destinantion'>
    <h2 className='sub-header '>
      Popular Destinations
    </h2>
    <p className='sub-header-text'>
      Vacations to make your experience enjoyable in Zambia!
    </p>
    <div className='popular-destinantion-cards'>
       {/* add cards here */}
       {Destinations.map((destination, index) => (
        <Card key={index} destination={destination} />
      ))}
    </div>
    </section>
    </main>
  )
}