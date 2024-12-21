<<<<<<< HEAD
﻿import React, { useState } from 'react';
import './Login.css';
import im from './image.png';
import AuthService from "../Services/auth.service";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeemail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleCancel = () => {
        // Réinitialiser les champs du formulaire en mettant à jour l'état
        setEmail("");
        setPassword("");
        setMessage("");
        setLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setMessage("");
        setLoading(true);

        if (!email && !password) {
            setLoading(false);
            setMessage("Attention : Veuillez remplir les deux champs !");
            return;
        }

        if (!email) {
            setLoading(false);
            setMessage("Attention : Le champ email est requis !");
            return;
        }

        if (!password) {
            setLoading(false);
            setMessage("Attention : Le champ du mot de passe est requis !");
            return;
        }

        AuthService.login(email, password)
            .then((user) => {
                alert("Bien connecté !");
                navigate("/");
                console.log("Connexion réussie:", user);
                // Redirection ou actions supplémentaires après la connexion
            })
            .catch((error) => {
                setLoading(false);
                setMessage(error.message); // Utiliser le message d'erreur
            });
    };

    return (
        <>

            {/* Barre de navigation fixée en haut */}
            <div className="navbar" style={{
                backgroundColor: 'white',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                height: '80px',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000
            }}>
                <div className="logo-home-container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    <img
                        src="/images/newlogo.png"
                        alt="Logo"
                        style={{
                            height: '150px',
                            objectFit: 'contain',
                            position: 'absolute',
                            left: '20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 1000
                        }}
                    />
                    <Link
                        to="/"
                        className="home-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'black',
                            marginLeft: '180px'  // Espace pour le logo
                        }}
                    >
                        <HomeIcon sx={{
                            marginRight: '5px',
                            color: 'rgba(128, 128, 128, 0.5)'
                        }} />
                        <span style={{
                            verticalAlign: 'middle',
                            marginTop: '2px'
                        }}>
                            Home
                        </span>
                    </Link>
                </div>
            </div>

            <div className="login-container">

                <div className="login-image">
                    {/* You can place the illustration or SVG here */}
                    <img src={im} alt="Login Illustration" />
                </div>
                <div className="login-form">
                    <h2>Bienvenue sur eLearning.M2I ! 👋</h2>
                    <p>Veuillez vous connecter à votre compte</p>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">

                            <input type="email" id="email" placeholder="Entrez votre adresse e-mail" value={email}
                                onChange={onChangeemail} />

                            <FaEnvelope className='icon' />
                        </div>
                        <div className="input-group">
                            <input type="password" id="password" placeholder="Entrez votre mot de passe" minLength={8} value={password}
                                onChange={onChangePassword}
                            />
                            <FaLock className='icon' />
                        </div>
                        <div className="effacer-formulaire">

                            <label onClick={handleCancel} style={{
                                cursor: 'pointer',
                                color: 'gray',
                                padding: '10px 15px',
                                borderRadius: '5px',
                                textAlign: 'center',
                                display: 'inline-block'
                            }} >Effacer le formulaire ?</label>
                            <Link to="/Sidebar">admin</Link>
                            <Link to="/HomeProf">prof</Link>
                            <Link to="/etudiants">etud</Link>

                            <Link to="/ForgotPassword">Mot de passe oublié ?</Link>
                        </div>
                        <button className=" btn-block login-btn" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Se connecter</span></button>
                        <br />
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>


                </div>
            </div></>
    );
};

<<<<<<< HEAD
export default Login;






=======
﻿import React, { useState } from 'react';
import './Login.css';
import im from './image.png';
import AuthService from "../Services/auth.service";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeemail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleCancel = () => {
        // Réinitialiser les champs du formulaire en mettant à jour l'état
        setEmail("");
        setPassword("");
        setMessage("");
        setLoading(false);
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setMessage("");
        setLoading(true);

        if (!email && !password) {
            setLoading(false);
            setMessage("Attention : Veuillez remplir les deux champs !");
            return;
        }

        if (!email) {
            setLoading(false);
            setMessage("Attention : Le champ email est requis !");
            return;
        }

        if (!password) {
            setLoading(false);
            setMessage("Attention : Le champ du mot de passe est requis !");
            return;
        }

        AuthService.login(email, password)
            .then((user) => {
                alert("Bien connecté !");
                navigate("/");
                console.log("Connexion réussie:", user);
                // Redirection ou actions supplémentaires après la connexion
            })
            .catch((error) => {
                setLoading(false);
                setMessage(error.message); // Utiliser le message d'erreur
            });
    };

    return (
    <>
        
            {/* Barre de navigation fixée en haut */}
            <div className="navbar">
                <div className="logo-home-container">
                    <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
                    <Link to="/" className="home-link">
                        <HomeIcon sx={{ marginLeft: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                        <span style={{ verticalAlign: 'middle', marginTop: '2px' }}> Home</span>
                    </Link>
                </div>
            </div >
                <div className="login-container">
            
            <div className="login-image">
                {/* You can place the illustration or SVG here */}
                <img src={im} alt="Login Illustration" />
            </div>
            <div className="login-form">
                <h2>Bienvenue sur eLearning.M2I ! 👋</h2>
                <p>Veuillez vous connecter à votre compte</p>
                <form onSubmit={handleLogin}>
                    <div className="input-group">

                        <input type="email" id="email" placeholder="Entrez votre adresse e-mail" value={email}
                            onChange={onChangeemail} />

                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" placeholder="Entrez votre mot de passe" minLength={8} value={password}
                            onChange={onChangePassword}
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="effacer-formulaire">

                        <label onClick={handleCancel} style={{
                            cursor: 'pointer',
                            color: 'gray',
                            padding: '10px 15px',
                            borderRadius: '5px',
                            textAlign: 'center',
                            display: 'inline-block'
                        }} >Effacer le formulaire ?</label>
                        <Link to="/sidebar">Connexion Reussie</Link>

                        <Link to="/ForgotPassword">Mot de passe oublié ?</Link>
                    </div>
                    <button className=" btn-block login-btn" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Se connecter</span></button>
                    <br /><br />
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </form>


            </div>
            </div></>
    );
};

export default Login;






>>>>>>> c76881e (premier commit)
=======
export default Login;
>>>>>>> pageProfSajiaNoura
