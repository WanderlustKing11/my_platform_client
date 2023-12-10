interface ApiResponse {
    body: {
      user_id: number;
      username: string;
    };
    code: number;
  }
  
  export async function apiFetchLogout(): Promise<ApiResponse | null> {
    try { 
      const response = await fetch('http://34.42.125.145:8080/api/logout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        credentials: 'include',
      });
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  