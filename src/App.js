import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Reset from './Pages/Reset';
import ForgotPassword from './Pages/ForgotPassword';
import HomePage from './Pages/HomePage'; 
import ProgramPage from './Pages/ProgramPage';
import Userlist from './annonces/Userlist';
import Portal from './annonces/Portal';
import UserCreate from './annonces/UserCreate';
import UserView from './annonces/UserView';
import UserEdit from './annonces/UserEdit';
import Sidebar from './annonces/Sidebar';
import Topbar from './annonces/Topbar';
import "./annonces/sb-admin-2.min.css";
import Dashboard from './annonces/Dashboard';

function App() {
    return (

         <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/Reset" element={<Reset />} />
                <Route path='/sidebar' element={<Sidebar />} />
                <Route path="/portal" element={<Portal />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='user-list' element={<Userlist />} />
                    <Route path='create-user' element={<UserCreate />} />
                    <Route path='user-view/:id' element={<UserView />} />
                    <Route path='user-edit/:id' element={<UserEdit />} />
                </Route>
            </Routes>
            </div>

  );
}

export default App;
