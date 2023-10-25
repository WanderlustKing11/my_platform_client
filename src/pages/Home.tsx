import { useEffect, useState } from 'react';
import Header from '../components/Header';
import FetchApiData from '../api/api';

export default function Home() {
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);    
  }, []);

  return (
    <div>
      <Header />

      {loading ? (
        <div className='loader'>
          <p>Loading </p>
          <img className='spinner-img' id='search-spinner' src='https://bolt-gcdn.sc-cdn.net/3/8jXLtC9b4MJzw2WUAyqBK?bo=EhgaABoAMgF9OgEEQgYIp5mn9AVIAlASYAE%3D&uc=18' alt='search spinner icon' />
        </div>
        
        
      ) : (
        <div id='sidebar'>
          <h1>Home Page</h1>
          <p>Hello, World!</p>
          <FetchApiData />
        </div>
      )}
    </div>
  );
}
