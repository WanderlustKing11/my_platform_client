interface ApiResponse {
  body: {
    user_id: number;
    username: string;
  };
  code: number;
}

const REG_POST = 'http://34.42.125.145:8080/api/register';

export async function apiFetchRegister(
  username: string,
  password: string
): Promise<ApiResponse | null> {
  const data = {
    service: 'service1',
    username,
    password,
  };

  const headers = new Headers();
  headers.append('Content-type', 'application/json; charset=UTF-8');

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers,
  };

  try {
    const response = await fetch(REG_POST, options);

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Uh oh, ', error);
    return null;
  }
}
