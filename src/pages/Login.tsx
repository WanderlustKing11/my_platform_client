import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetchLogin } from '../api/ApiFetchLogin'

interface LoginProps {
  toggle: () => void;
}

export default function Login(props: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
 
      const response = await apiFetchLogin(username, password);

      if (response && response.body && response.body.username) {
        navigate('/success', {state: { username: response.body.username } });
      } else {
        setLoginStatus('Login failed. Please check your username and password.');
      }
    }
  

  return (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          <h2>Login</h2>
          {loginStatus && <p className='error-message'>{loginStatus}</p>}
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type='submit'>Login</button>
          </form>
          <button type='button' onClick={props.toggle}>Close</button>
        </div>
      </div>
    </div>
  );
}
