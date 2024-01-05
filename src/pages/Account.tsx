import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import UpdateUsername from '../components/UpdateUsername';
// import UpdatePassword from '../components/UpdatePassword';


export default function Account() {
  const location = useLocation();
  const { username } = location.state || {};
  const [showUpdateUsernamePopup, setShowUpdateUsernamePopup] = useState(false);
  const [showUpdatePasswordPopup, setShowUpdatePasswordPopup] = useState(false);

  const toggleUpdateUsernamePopup = () => {
    setShowUpdateUsernamePopup(!showUpdateUsernamePopup);
  };

  const toggleUpdatePasswordPopup = () => {
    setShowUpdatePasswordPopup(!showUpdatePasswordPopup);
  };


    return (
      <div className='account-page'>
        <Header />
        <div className='account-container'>
        <h1>
          Welcome to <span className='account-welcome-ws'>Whale Shark</span>, {username}
        </h1>
        </div>
        <div className='account-user-pref'>
          <button className='update-link' onClick={toggleUpdateUsernamePopup}>
            Change/Update username
          </button>
          {showUpdateUsernamePopup && <UpdateUsername toggle={toggleUpdateUsernamePopup} />}
          <button className='update-link' onClick={toggleUpdatePasswordPopup}>
            Change/Update password
          </button>
          {/* {showUpdatePasswordPopup && <UpdatePassword toggle={toggleUpdatePasswordPopup} />} */}
        </div>
      </div>
    )
  }
  
