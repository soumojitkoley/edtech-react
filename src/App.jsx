import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup'
import AfterLogin from './components/AfterLogin';
import Logout from './components/Logout';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { toast, Zoom, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [beforeLoginButtonsVisible, setbeforeLoginButtonsVisible] = useState(true);
  const [afterLoginButtonsVisible, setafterLoginButtonsVisible] = useState(false);

  function loginClickHandler(event) {
    event.preventDefault();
    toast.success('Logged in', {
      position: "top-center",
      autoClose: 1000,
      progress: undefined,
      transition: Slide,
      theme: "#242424",
      });
    setbeforeLoginButtonsVisible(false)
    setafterLoginButtonsVisible(true);
  }

  function logoutClickHandler() {
    setbeforeLoginButtonsVisible(true)
    setafterLoginButtonsVisible(false)
  }

  return (
    <div className="app-main-div">

      <Navbar beforeLoginButtonsVisible={beforeLoginButtonsVisible} afterLoginButtonsVisible={afterLoginButtonsVisible} logoutClickHandler={logoutClickHandler} ></Navbar>

      <Routes className=''>
        <Route path='/' element={<Outlet/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login loginClickHandler ={loginClickHandler} />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/after-login' element={<AfterLogin/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
