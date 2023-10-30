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
    // const data = {
    //   "username": "Doug",
    //   "password": "Goku",
    //   "service": "service1",
    // };

    const data = {
      username: "jelly",
      password: "password",
      service: "service1",
    }

  useEffect(() => {
    fetch("https://serviceplatform-qxy4flwsca-uc.a.run.app/api/login", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
        },      
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
      <h3>
        Here's the <em>test</em> API:
      </h3>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </>
  );
}
