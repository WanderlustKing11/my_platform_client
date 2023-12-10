import { useNavigate } from 'react-router-dom';
import { apiFetchLogout } from '../api/apiFetchLogout';

interface LogoutProps {
  toggle: () => void;
}

export default function Logout(props: LogoutProps) {
  const navigate = useNavigate();

  async function handleLogout() {
    await apiFetchLogout();
    navigate('/');
  }

  return (
    
      <div className='popup'>
        <div className='popup-inner'>
          <h3>Are you sure you want to logout?</h3>

          <button className='logout-pop-btn' type='button' onClick={handleLogout}>Log me out</button>

          <button className='logout-pop-btn' type='button' onClick={props.toggle}>
            Close
          </button>
        </div>
      </div>
    
  );
}
