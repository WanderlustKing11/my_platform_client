import { useState, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { apiFetchUpdateUsername } from '../api/apiFetchUpdateUsername';

interface UpdateUsernameProps {
  toggle: () => void;
}

export default function UpdateUsername(props: UpdateUsernameProps) {
  const location = useLocation();
  const [newUsername, setNewUsername] = useState('');
  const [password, setPassword] = useState('');
  const [updateStatus, setUpdateStatus] = useState('');

  async function handleUpdateUsername(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await apiFetchUpdateUsername(
      location.state?.username,
      newUsername,
      password
    );

    if (response && response.body && response.body.username) {
      setUpdateStatus('Username updated successfully!');
      console.log('Username updated successfully!!!');
    } else {
      setUpdateStatus('Could not update username.');
      console.log('Something went wrong, could not update username.');
    }
  }

  return (
    <div>
      <div className='popup'>
        <div className='popup-inner'>
          <h3>Update/Change Username</h3>
          <form onSubmit={handleUpdateUsername}>
            <label>
              Enter your new username:
              <input
                type='text'
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {updateStatus && (
              <p className='error-message'>{updateStatus}</p>
            )}
            <button type='submit'>Update your username</button>
          </form>
          <button type='button' onClick={props.toggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
