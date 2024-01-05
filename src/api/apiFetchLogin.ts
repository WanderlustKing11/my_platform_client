interface ApiResponse {
  body: {
    user_id: number;
    username: string;
  };
  code: number;
}

const LOGIN_POST = 'http://34.42.125.145:8080/api/login';

export async function apiFetchLogin(username: string, password: string): Promise<ApiResponse | null> {
  const data = {
    service: 'service1',
    username,
    password,
  };

  const headers = new Headers();
  headers.append('Content-type', 'application/json; charset=UTF-8');

  const options = {
    method: 'POST',
    // mode: "no-cors",
    body: JSON.stringify(data),
    headers
  }

  try {
    const response = await fetch(LOGIN_POST, options);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.error('Uh oh, ', error);
    return null;
  }
}
