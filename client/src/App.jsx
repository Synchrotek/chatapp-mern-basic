import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import { useEffect } from 'react';

function App() {
  const { authUser } = useAuthContext();

  useEffect(() => {
    console.log("authUser:", authUser);
  }, [authUser]);
  return (
    <div className='backgroundWallpaper p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={
          authUser ? <Home /> : <Navigate to={"/login"} />
        } />
        <Route path='/login' element={
          authUser ? <Navigate to="/" /> : <Login />
        } />
        <Route path='/signup' element={
          authUser ? <Navigate to="/" /> : <SignUp />
        } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
