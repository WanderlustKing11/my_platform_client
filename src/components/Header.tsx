import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout';

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  return (
    <div>
      <header>
        <nav>
          <ul className='header-ul'>
            <div className='nav-items-container'>
            <li className='header-li'>
              <Link
                to='/'
                className={`nav-item ${activeLink === '/' ? 'active' : ''}`}
                onClick={() => setActiveLink('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={`nav-item ${
                  activeLink === '/about' ? `active` : ''
                }`}
                onClick={() => setActiveLink('/about')}
              >
                About
              </Link>
            </li>
            </div>

              {activeLink === '/account' && (
                <li className='header-li'>
                <button className='logout-button' onClick={toggleLogoutPopup}>Logout</button>
                </li>
              )}
          </ul>
        </nav>
      </header>
      {showLogoutPopup && <Logout toggle={toggleLogoutPopup} />}
    </div>
  );
}
