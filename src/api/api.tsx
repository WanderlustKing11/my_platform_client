import { useState, useEffect } from 'react';

export default function FetchApiData() {
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
      "username": "Doug",
      "password": "Goku",
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
    return <p>Searching for data...</p>;
  }

  return (
    <>
      <h4>
        Here's the <em>test</em> API:
      </h4>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}
