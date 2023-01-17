import React from 'react'; 
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './components/pages/Login';
import User_details from './components/pages/User_details';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Cards from './components/props/Cards';
import User_table from './components/props/User_table';
import Filter from './components/props/Filter';
// import Options from './components/props/Options';
import LandingPage from './components/pages/LandingPage';
import LendsqrUserContext from './context/LendsqrUserContext';
import UserDetailsPage from './components/pages/UserDetailsPage';

function App() {
  return (
<LendsqrUserContext>
<BrowserRouter>
   {/* <Navigation/> */}
   {/* <Sidebar/> */}
 {/* <Login/> */}
      {/*<Options/> */}

   <Routes>
    <Route element={<LandingPage/>} path="/" />
    <Route element={< Cards />} path="cards" />
    <Route element={<User_table/>} path="table" />
    <Route element={<Login />} path="login" />
    <Route element={<UserDetailsPage />} path="user/:id" />
   </Routes>
   </BrowserRouter>
</LendsqrUserContext>
  );
}

export default App;
