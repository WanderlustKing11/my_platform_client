import { useState, useEffect } from 'react';

export default function ApiFetchLogin(username, password) {
  const [apiResponse, setApiResponse] = useState(null);

  /////////////// Test API requests ///////////////
  // const data = {
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // };

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method:'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setApiResponse(json);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // });

  //////////////////// WSC Login POST request //////////////////////////
    const data = {
      "service": "service1",
      "username": username,
      "password": password,
    };

    // const data = {
    //   username: "jelly",
    //   password: "password",
    //   service: "service1",
    // }

  useEffect(() => {
    fetch("http://34.42.125.145:8080/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => response.json())
    .then((json) => {
      setApiResponse(json);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  });

  if (apiResponse === null) {
    return <div>
             <p>Loading data...</p>
             <img className='spinner-img' id='search-spinner' src='https://bolt-gcdn.sc-cdn.net/3/8jXLtC9b4MJzw2WUAyqBK?bo=EhgaABoAMgF9OgEEQgYIp5mn9AVIAlASYAE%3D&uc=18' alt='search spinner icon' />
           </div> 
  }

  return (
    <>
      <p>Hello, {username}</p>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}
