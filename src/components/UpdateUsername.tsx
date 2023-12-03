// import { useState, FormEvent } from 'react';
// import { useLocation } from 'react-router-dom';
// import { apiFetchUpdateUsername } from '../api/apiFetchUpdateUsername';

// interface UpdateUsernameProps {
//   toggle: () => void;
// }

// export default function Register(props: UpdateUsernameProps) {
//   const location = useLocation();
//   const { username } = location.state || {};
//   const accountPage = location.pathname;

//   async function handleUpdateUsername(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     if (accountPage === '/account') {
//       return;
//     }
 
//       const updateUsernameResponse = await apiFetchUpdateUsername(username, password);
//       if (updateUsernameResponse && updateUsernameResponse.body && updateUsernameResponse.body.username) {
//         const updateUsernameResponse = await apiFetchUpdateUsername(username, password);
//         if (updateUsernameResponse && updateUsernameResponse.body && updateUsernameResponse.body.username) {
//           console.log('Username updated successfully!')
//         } else {
//           console.log('Could not update username.');
//         }
//       } else {
//         console.log('Update failed!!!')
//       }
//     }
  

//   return (
//     <div>
//       <div className='popup'>
//         <div className='popup-inner'>
//           <h3>Update/Change Username</h3>
//           <form onSubmit={handleUpdateUsername}>
            
//             <label>
//               Confirm:
//               <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
//             </label>
//             <label>
//               Password:
//               <input type='password' value={password} onChange={e => setPassword(e.target.value)} required />
//             </label>
//             <label>
//               Confirm Password:
//               <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//             </label>
//             {passwordStatus && <p className='error-message'>{passwordStatus}</p>}
//             {loginStatus && <p className='error-message'>{loginStatus}</p>}
//             <button type='submit'>Create Account</button>
//           </form>
//           <button type='button' onClick={props.toggle}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }
