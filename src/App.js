import logo from'./logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/home/HomePage';
import FooterComponent from './components/common/Footer';
import AllRoomsPage from './components/booking_rooms/AllRoomsPage';
import FindBookingPage from './components/booking_rooms/FindBookingPage';
import RoomDetailsPage from './components/booking_rooms/RoomDetailsPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/rooms' element={<AllRoomsPage/>}/>
            <Route exact path='/find-booking' element={<FindBookingPage/>}/>
            <Route exact path='/room-details-book/:roomId' element={<RoomDetailsPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>

          </Routes>
        </div>
        <FooterComponent/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
