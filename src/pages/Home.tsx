import { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Login from './Login';
// import FetchApiData from '../api/api';

export default function Home() {
  // const location = useLocation();
  // const [activeLink, setActiveLink] = useState(location.pathname);
  const [seen, setSeen] = useState(false);

  function togglePopup() {
    setSeen(!seen);
    console.log("clicked!");
  }

  return (
    <div>
      <Header />
      <div className='home-container'>
        <h2>Welcome To Whale Shark</h2>
        <Link to='/register' className='home-btn'><button>Register</button></Link>
        <button onClick={togglePopup}>Login</button>
        {seen ? <Login toggle={togglePopup} /> : null}
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
