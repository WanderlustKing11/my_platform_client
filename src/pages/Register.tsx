import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetchRegister } from '../api/apiFetchRegister';
import { apiFetchLogin } from '../api/apiFetchLogin';

interface RegisterProps {
  toggle: () => void;
}

export default function Register(props: RegisterProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('');
  const navigate = useNavigate();

  function validatePassword() {
    // return password === confirmPassword;
    if (password !== confirmPassword) {
      setPasswordStatus("Passwords don't match");
      return false;
    } else {
      setPasswordStatus('');
      return true;
    }
  }

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validatePassword()) {
      return;
    }
 
      const registerResponse = await apiFetchRegister(username, password);
      if (registerResponse && registerResponse.body && registerResponse.body.username) {
        const loginResponse = await apiFetchLogin(username, password);
        if (loginResponse && loginResponse.body && loginResponse.body.username) {
          navigate('/success', {state: { username: loginResponse.body.username } });
        } else {
          setLoginStatus('Login failed. Please check your username and password.');
        }
      } else {
        setLoginStatus('Registration failed. Please try again.');
      }
    }
  

  return (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label>
              Username:
              <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
              Password:
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
            </label>
            <label>
              Confirm Password:
              <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
            </label>
            {passwordStatus && <p className='error-message'>{passwordStatus}</p>}
            {loginStatus && <p className='error-message'>{loginStatus}</p>}
            <button type='submit'>Create Account</button>
          </form>
          <button type='button' onClick={props.toggle}>Close</button>
        </div>
      </div>
    </div>
  );
}
