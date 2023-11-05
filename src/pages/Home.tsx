// import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
// import FetchApiData from '../api/api';

export default function Home() {
  // const location = useLocation();
  // const [activeLink, setActiveLink] = useState(location.pathname);

  return (
    <div>
      <Header />
      <div className='home-container'>
        <h2>Welcome To Whale Shark</h2>
        <button><Link to='/register' className='home-btn'>Register</Link></button>
        <button><Link to='/login' className='home-btn'>Login</Link></button>
      </div>

      {/* {loading ? (
        <div className='loader'>
          <p>Loading </p>
          <img className='spinner-img' id='search-spinner' src='https://bolt-gcdn.sc-cdn.net/3/8jXLtC9b4MJzw2WUAyqBK?bo=EhgaABoAMgF9OgEEQgYIp5mn9AVIAlASYAE%3D&uc=18' alt='search spinner icon' />
        </div>
        
        
      ) : (
        <div id='sidebar'>
          <h1>Welcome to Whale Shark</h1>
          <FetchApiData />
        </div>
      )} */}
    </div>
  );
}
