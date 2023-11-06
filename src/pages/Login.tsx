import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ApiFetchLogin from '../api/ApiFetchLogin';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleLogin(e) {
    e.preventDefault()
    // Code to handle login goes here
    useEffect(() => {
      const response = loginSuccess(username, password);

      if (response.ok) {
        setLoginSuccess(true);

      } else {
        setLoginSuccess(false);
      }
      // catch (error)
    });
    props.toggle()
  }

  return (
    <div>
      <Header />

      <div className='popup'>
        <div className='popup-inner'>
          <h2>Login</h2>
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
