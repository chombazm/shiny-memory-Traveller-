import '../App.css';

export const HomePage = () => {
  return (
    <div>
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
          <p>
            Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!
          </p>
          <ul className='download-icons'>
            <li>
              <img src='../../assets/images/playstore.png' alt='google-play' />
            </li>
            <li>
              <img src='../assets/images/istore.png' alt='app-store' />
            </li>
          </ul>
        </div>
        <div className='hero-image'>
          <img src="../assets/images/hero.png" alt="hero section" />
        </div>
      </div>

    </div>
  )
}