import { useState } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Header />
      <div className='home-container'>
        <h2>Welcome To Whale Shark</h2>
        <button onClick={() => setShowRegister(!showRegister)}>Register</button>
        {showRegister ? <Register toggle={() => setShowRegister(false)} /> : null}
        <button onClick={() => setShowLogin(!showLogin)}>Login</button>
        {showLogin ? <Login toggle={() => setShowLogin(false)} /> : null}
      </div>
    </div>
  );
}
