// import { useState, FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiFetchUpdatePassword } from '../api/apiFetchUpdatePassword';

// interface UpdateUPasswordProps {
//   toggle: () => void;
// }

// export default function UpdatePassword(props: UpdateUPasswordProps) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginStatus, setLoginStatus] = useState('');
//   const navigate = useNavigate();

//   async function handleLogin(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault()
 
//       const response = await apiFetchUpdateUsername(username, password);

//       if (response && response.body && response.body.username) {
//         navigate('/account', {state: { username: response.body.username } });
//       } else {
//         setLoginStatus('Login failed. Please check your username and password.');
//       }
//     }
  

//   return (
//     <div>
//       <div className='popup'>
//         <div className='popup-inner'>
//           <h2>Update/Change Password</h2>
//           {/* {loginStatus && <p className='error-message'>{loginStatus}</p>} */}
//           {/* <form onSubmit={handleLogin}> */}
//           <form>
//             <label>
//               Enter current password:
//               <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
//             </label>
//             <label>
//               Change password to:
//               <input type='text' value={password} onChange={e => setPassword(e.target.value)} />
//             </label>
            
//             <button type='submit'>Update</button>
//           </form>
//           <button type='button' onClick={props.toggle}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }
