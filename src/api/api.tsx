import { useState, useEffect } from 'react';

export default function FetchApiData() {
  const [apiResponse, setApiResponse] = useState(null);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setApiResponse(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (apiResponse === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>Here's the API:</h3>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}

{
  /* <>
  try {
    const response = await fetch('http://34.42.125.145:8080/api/home');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
  </> */
}
