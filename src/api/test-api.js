/* eslint-disable no-inner-declarations */
// interface ApiResponse {
//   body: {
//     user_id: number;
//     username: string;
//   };
//   code: number;
// }

// const UP_USERNAME_POST = 'http://34.42.125.145:8080/api/update/username';

// export async function testApi(
//   username: string,
//   password: string,
//   new_username: string
// ): Promise<ApiResponse | null> {
//   const data = {
//     username,
//     password,
//     new_username,
//   };

//   const headers = new Headers();
//   headers.append('Content-type', 'application/json; charset=UTF-8');

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers,
//   };
//   try {
//     const response = await fetch(UP_USERNAME_POST, options);
//     const obj = await response.json();
//     return obj;
//   } catch (error) {
//     console.error('Uh oh, ', error);
//     return null;
//   }
// }

//////////////////////////////////////////////////////

// const LOGIN_POST = 'http://34.42.125.145:8080/api/login';

// export async function apiFetchLogin() {
//   const data = {
//     service: 'service1',
//     username: 'user1',
//     password: 'password',
//   };

//   const headers = new Headers();
//   headers.append('Content-type', 'application/json; charset=UTF-8');

//   const options = {
//     method: 'POST',
//     // mode: "no-cors",
//     body: JSON.stringify(data),
//     headers
//   }

//   try {
//     const response = await fetch(LOGIN_POST, options);
//     const obj = await response.json();
//     console.log(obj);
//   } catch (error) {
//     console.error('Uh oh, ', error);
//   }
// }

// apiFetchLogin();

/////////////////////////////////////////////////////////


async function login() {
  const LOGIN_POST = 'http://34.42.125.145:8080/api/login';

  const data = {
    service: 'service1',
    username: 'user1',
    password: 'password',
  };

  const headers = new Headers();
  headers.append('Content-type', 'application/json; charset=UTF-8');

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  }

  try {
    const response = await fetch(LOGIN_POST, options);
    const obj = await response.json();
    console.log('Logged in successfully: ', obj);

    async function apiFetchUpdateUsername() {
      const UP_USERNAME_POST = 'http://34.42.125.145:8080/api/update/username';
    
      const data = {
        username: 'user1',
        password: 'password',
        new_username: 'user69',
      };
    
      const headers = new Headers();
      headers.append('Content-type', 'application/json; charset=UTF-8');
    
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
      }
    
      try {
        const response = await fetch(UP_USERNAME_POST, options);
        const obj = await response.json();
        console.log('Successfully updated username: ', obj);
      } catch (error) {
        console.error('Uh oh, could not update username: ', error);
      }
    }
    apiFetchUpdateUsername();
  } catch (error) {
    console.error('Uh oh, could not log in... ', error);
    return null;
  }
}


login();