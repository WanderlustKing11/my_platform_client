import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

export default function Success() {
  const location = useLocation();
  const { username } = location.state || {};

    return (
      <div>
        <Header />
        <div className='account-container'>
        <h1>
          Welcome to <span className='account-welcome-ws'>Whale Shark</span>, {username}
        </h1>
        </div>
      </div>
    )
  }
  
