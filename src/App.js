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
import ProfilePage from './components/profile/ProfilePage';
import EditProfilePage from './components/profile/EditProfilePage';
import { ProtectedRoute } from './service/guard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            {/* public routes */}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/rooms' element={<AllRoomsPage/>}/>
            <Route exact path='/find-booking' element={<FindBookingPage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            <Route exact path='/register' element={<RegisterPage/>}/>

            {/* authenticated user routes  */}
            <Route exact path='/room-details-book/:roomId' element = {<ProtectedRoute element={<RoomDetailsPage/>}/>} />
            <Route exact path='/profile' element={<ProtectedRoute element={<ProfilePage/>}/>} />
            <Route exact path='/edit-profile' element={<ProtectedRoute element={<EditProfilePage/>}/>} />


            {/* WildCard/Backcall routes  */}
            <Route path="*" element={<Navigate to="/home" />} />

          </Routes>
        </div>
        <FooterComponent/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
