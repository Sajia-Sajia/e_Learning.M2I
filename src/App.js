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
import Portalprof from './pageprof/Portalprof';
import UserCreate from './annonces/UserCreate';
import UserView from './annonces/UserView';
import UserEdit from './annonces/UserEdit';
import Sidebar from './annonces/Sidebar';
import Sidebarprof from './pageprof/Sidebarprof';
import Topbar from './annonces/Topbar';
import "./annonces/sb-admin-2.min.css";
import Dashboard from './annonces/Dashboard';
import TPList from './pageprof/TPList';
import TPcreate from './pageprof/TPcreate';
import TPedit from './pageprof/TPedit';
import TDList from "./pageprof/TDList";
import TDcreate from "./pageprof/TDcreate";
import TDedit from "./pageprof/TDedit";
import CourCreate from "./pageprof/CourCreate";
import editcour from "./pageprof/EditCour";
import Courslist from "./pageprof/CoursList";
import AnnoncesList from "./pageprof/AnnocesList";
import AnnonceCreate from "./pageprof/AnnonceCreate";
import Editannonce from "./pageprof/Editannonce";
function App() {
    return (

         <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/Reset" element={<Reset />} />
                <Route path='/sidebar' element={<Sidebar />} />
                <Route path='/sidebarprof' element={<Sidebarprof />} />
                <Route path="/portal" element={<Portal />}>
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='user-list' element={<Userlist />} />
                    <Route path='create-user' element={<UserCreate />} />
                    <Route path='user-view/:id' element={<UserView />} />
                    <Route path='user-edit/:id' element={<UserEdit />} />
                </Route>
                <Route path="/portalprof" element={<Portalprof />}>
                    <Route path='dashboard' element={<Dashboard />} />

                    <Route path='annonces-list' element={<AnnoncesList />} />
                    <Route path='create-annonce' element={<AnnonceCreate />} />
                    <Route path='annonce-edit/:id' element={<Editannonce />} />

                    <Route path='tp-list' element={<TPList />} />
                    <Route path='create-tp' element={<TPcreate />} />
                    <Route path='td-edit/:id' element={<TPedit />} />

                    <Route path='td-list' element={<TDList />} />
                    <Route path='create-td' element={<TDcreate />} />
                    <Route path='td-edit/:id' element={< TDedit />} />

                    <Route path='cours-list' element={<Courslist />} />
                    <Route path='create-cour' element={<CourCreate />} />
                    <Route path='cour-edit/:id' element={<editcour />} />
                </Route>
            </Routes>
            </div>

  );
}

export default App;
