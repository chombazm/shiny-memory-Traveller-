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

    </div>
  )
}