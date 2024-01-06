// interface ApiResponse {
//   body: {
//     user_id: number;
//     username: string;
//   };
//   code: number;
// }

const UP_USERNAME_POST = 'http://34.42.125.145:8080/api/update/username';

export async function testApi(
  username: string,
  password: string,
  new_username: string
): Promise<ApiResponse | null> {
  const data = {
    username,
    password,
    new_username,
  };

  const headers = new Headers();
  headers.append('Content-type', 'application/json; charset=UTF-8');

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  };
  try {
    const response = await fetch(UP_USERNAME_POST, options);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.error('Uh oh, ', error);
    return null;
  }
}
