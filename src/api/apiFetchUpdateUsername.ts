interface ApiResponse {
    body: {
      user_id: number;
      username: string;
    };
    code: number;
  }
  
  export async function apiFetchUpdateUsername(username: string, password: string): Promise<ApiResponse | null> {
    try {
      const data = {
        service: 'service1',
        username,
        password,
      };
  
      const response = await fetch('http://34.42.125.145:8080/api/update/username', {
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
  