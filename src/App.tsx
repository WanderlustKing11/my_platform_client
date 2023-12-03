import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Register from './components/Register';
import Login from './components/Login';
import Account from './pages/Account';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register toggle={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path='/login' element={<Login toggle={function (): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
