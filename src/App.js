<<<<<<< HEAD
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
import List from "./annonces/User/List";
import Edit from "./annonces/User/Edit";
import Create from "./annonces/User/Create";
import Createstudent from "./annonces/Etudiants/Createstudent";
import Editstudent from "./annonces/Etudiants/Editstudent";
import Liststudent from "./annonces/Etudiants/Liststudent";
import Listmodule from "./annonces/modules/Listmodule";
import Editmodule from "./annonces/modules/Editmodule";
import Createmodule from "./annonces/modules/Createmodule";

import ProfileAdmin from "./annonces/ProfileAdmin"




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
                    <Route path='list' element={<List />} />
                    <Route path='createstudent' element={<Createstudent />} />
                    <Route path='editstudent' element={<Editstudent />} />
                    <Route path='liststudent' element={<Liststudent/>} />
                    <Route path='createmodule' element={<Createmodule />} />
                    <Route path='editmodule' element={<Editmodule />} />
                    <Route path='listmodule' element={<Listmodule/>} />
                    <Route path='ProfileAdmin' element={<ProfileAdmin/>} />



                    <Route path='create' element={<Create />} />

                    <Route path='edit/:id' element={<Edit />} />


                    <Route path='create-user' element={<UserCreate />} />
                    <Route path='user-view/:id' element={<UserView />} />
                    <Route path='user-edit/:id' element={<UserEdit />} />
                    <Route path='editmodule/:id' element={<Editmodule />} />

                    <Route path='student-edit/:id' element={<Editstudent />} />

                </Route>
            </Routes>
            </div>

  );
}

export default App;
=======
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
import List from "./annonces/User/List";
import Edit from "./annonces/User/Edit";
import Create from "./annonces/User/Create";
import Createstudent from "./annonces/Etudiants/Createstudent";
import Editstudent from "./annonces/Etudiants/Editstudent";
import Liststudent from "./annonces/Etudiants/Liststudent";
import Listmodule from "./annonces/modules/Listmodule";
import Editmodule from "./annonces/modules/Editmodule";
import Createmodule from "./annonces/modules/Createmodule";

import ProfileAdmin from "./annonces/ProfileAdmin"




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
                    <Route path='list' element={<List />} />
                    <Route path='createstudent' element={<Createstudent />} />
                    <Route path='editstudent' element={<Editstudent />} />
                    <Route path='liststudent' element={<Liststudent/>} />
                    <Route path='createmodule' element={<Createmodule />} />
                    <Route path='editmodule' element={<Editmodule />} />
                    <Route path='listmodule' element={<Listmodule/>} />
                    <Route path='ProfileAdmin' element={<ProfileAdmin/>} />



                    <Route path='create' element={<Create />} />

                    <Route path='edit/:id' element={<Edit />} />


                    <Route path='create-user' element={<UserCreate />} />
                    <Route path='user-view/:id' element={<UserView />} />
                    <Route path='user-edit/:id' element={<UserEdit />} />
                    <Route path='editmodule/:id' element={<Editmodule />} />

                    <Route path='student-edit/:id' element={<Editstudent />} />

                </Route>
            </Routes>
            </div>

  );
}

export default App;
>>>>>>> c76881e (premier commit)
