import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { fetchApiData } from '../api/api';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div>
            <Header />
          </div>
          <h1>Home Page</h1>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
