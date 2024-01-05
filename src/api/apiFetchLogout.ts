interface ApiResponse {
    body: {
      user_id: number;
      username: string;
    };
    code: number;
  }

  const LOGOUT_POST = 'http://34.42.125.145:8080/api/logout';
  
  export async function apiFetchLogout(): Promise<ApiResponse | null> {
    const headers = new Headers();
    headers.append('Content-type', 'application/json; charset=UTF-8');

    const options: RequestInit = {
      method: 'POST',
      // mode: "no-cors",
      headers,
      credentials: 'include',
    }

    try { 
      const response = await fetch(LOGOUT_POST, options);  
      const obj = await response.json();
      return obj;
      console.log("You have successfully logged out", obj);
    } catch (error) {
      console.error('Uh oh, ', error);
      return null;
    }
  }
  