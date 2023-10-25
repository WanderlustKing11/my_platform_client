import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <div>
    <header>
      <nav>
        <ul className='header-ul'>
          <li className='header-li'>
            <Link 
              to="/" 
              className={`nav-item ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => setActiveLink('/')}
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-item ${activeLink === '/about' ? `active` : ''}`}
              onClick={() => setActiveLink('/about')}
            >About</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}


