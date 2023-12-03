import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  toggle: () => void;
}

export default function Logout(props: LogoutProps) {
  const navigate = useNavigate();

  function handleLogout() {
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
