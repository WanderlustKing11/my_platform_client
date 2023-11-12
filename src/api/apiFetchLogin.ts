// import { useState, useEffect } from 'react';

interface ApiResponse {
  body: {
    user_id: number;
    username: string;
  };
  code: number;
}

// interface ApiFetchLoginProps {
//   username: string;
//   password: string;
// }

// export default function ApiFetchLogin(props: ApiFetchLoginProps) {
//   const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

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
  // const wscData1 = {
  //   "service": "service1",
  //   "username": username,
  //   "password": password,
  // };

  // const wscData2 = {
  //   username: "jelly",
  //   password: "password",
  //   service: "service1",
  // }


//   useEffect(() => {
//     const data = {
//       service: 'service1',
//       username: props.username,
//       password: props.password,
//     };

//     fetch('http://34.42.125.145:8080/api/login', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         setApiResponse(json);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [props.username, props.password]);

//   if (apiResponse === null) {
//     return (
//       <div>
//         <p>Loading data...</p>
//         <img
//           className='spinner-img'
//           id='search-spinner'
//           src='https://bolt-gcdn.sc-cdn.net/3/8jXLtC9b4MJzw2WUAyqBK?bo=EhgaABoAMgF9OgEEQgYIp5mn9AVIAlASYAE%3D&uc=18'
//           alt='search spinner icon'
//         />
//       </div>
//     );
//   }

//   const userName = apiResponse.body.username;

//   return (
//     <>
//       <p>Hello, {userName}</p>
//       <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
//     </>
//   );
// }

// ApiFetchLogin.ts
export async function apiFetchLogin(username: string, password: string): Promise<ApiResponse | null> {
  try {
    const data = {
      service: 'service1',
      username,
      password,
    };

    const response = await fetch('http://34.42.125.145:8080/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
