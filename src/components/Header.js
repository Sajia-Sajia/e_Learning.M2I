import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from 'emailjs-com';

const Header = ({ showSemester }) => {
    const [anchorElProgram, setAnchorElProgram] = useState(null);
    const [anchorElOpportunite, setAnchorElOpportunite] = useState(null);
    const [openContactForm, setOpenContactForm] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const navigate = useNavigate();

    const handleProgramOpen = (event) => setAnchorElProgram(event.currentTarget);
    const handleProgramClose = () => setAnchorElProgram(null);

    const handleOpportuniteOpen = (event) => setAnchorElOpportunite(event.currentTarget);
    const handleOpportuniteClose = () => setAnchorElOpportunite(null);

    const handleProgramClick = () => {
        navigate('/ProgramPage');
        handleProgramClose();
    };

    const handleScrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with ID "${sectionId}" not found.`);
        }
        handleProgramClose();
    };

    const handleOpenContactForm = () => setOpenContactForm(true);
    const handleCloseContactForm = () => setOpenContactForm(false);

    const handleContactFormChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_jgawclq', 'template_gedzw5f', {
            name: contactForm.name,
            email: contactForm.email,
            message: contactForm.message
        }, 'gTIz9zM9FyaFhrvU3')
            .then((response) => {
                console.log('Email sent successfully to admin', response.status, response.text);
                return emailjs.send('service_jgawclq', 'template_gxh492d', {
                    name: contactForm.name,
                    email: contactForm.email,
                    message: contactForm.message
                }, 'gTIz9zM9FyaFhrvU3');
            })
            .then((response) => {
                console.log('Confirmation email sent successfully to user', response.status, response.text);
                handleCloseContactForm();
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
    };

    return (
        <>
            <AppBar position="fixed" sx={{
                backgroundColor: 'white',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                height: '80px'
            }}>
                <Toolbar sx={{ height: '100%' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '20px',
                            marginRight: '50px',
                            width: '200px',
                            position: 'relative'
                        }}
                    >
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
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexGrow: 1,
                        gap: '30px'
                    }}>
                        <Button
                            sx={{ color: 'black' }}
                            onClick={() => handleScrollToSection('home')}
                        >
                            <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Home
                        </Button>

                        <Button
                            sx={{ color: 'black' }}
                            onClick={handleProgramClick}
                        >
                            <MenuBookIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Programme
                        </Button>

                        <div>
                            <Button
                                sx={{ color: 'black' }}
                                onClick={handleOpportuniteOpen}
                            >
                                <BusinessCenterIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                                Opportunités de Carrière
                            </Button>
                            <Menu
                                anchorEl={anchorElOpportunite}
                                open={Boolean(anchorElOpportunite)}
                                onClose={handleOpportuniteClose}
                                sx={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}
                            >
                                <MenuItem onClick={() => window.open('https://www.linkedin.com', '_blank')} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LinkedInIcon sx={{ marginRight: '10px', color: '#0077b5', fontSize: '24px' }} />
                                    LinkedIn
                                </MenuItem>
                                <MenuItem onClick={() => window.open('https://www.indeed.com', '_blank')} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/images/indeed.png" alt="Indeed" style={{ width: '20px', marginRight: '10px' }} />
                                    Indeed
                                </MenuItem>
                                <MenuItem onClick={() => window.open('https://myjobalert.ma/', '_blank')} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/images/mjaLogo-nbg.png" alt="MyJobAlert" style={{ width: '29px', marginRight: '10px' }} />
                                    MyJobAlert
                                </MenuItem>
                                <MenuItem onClick={() => window.open('https://www.edx.org', '_blank')} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/images/edx.png" alt="edX" style={{ width: '24px', marginRight: '10px' }} />
                                    edX
                                </MenuItem>
                                <MenuItem onClick={() => window.open('https://www.coursera.org', '_blank')} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/images/LG2.png" alt="Coursera" style={{ width: '24px', marginRight: '10px' }} />
                                    Coursera
                                </MenuItem>
                            </Menu>
                        </div>

                        <Button
                            sx={{ color: 'black' }}
                            onClick={handleOpenContactForm}
                        >
                            <MailOutlineIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Contactez-nous
                        </Button>
                    </Box>

                    <Link to="/Login" style={{ marginLeft: '20px' }}>
                        <Button
                            sx={{
                                backgroundColor: '#008fbf',
                                color: 'white',
                                borderRadius: '20px',
                                width: '120px',
                                height: '40px',
                                marginRight: '20px',
                                '&:hover': {
                                    backgroundColor: '#00c9f2',
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>

            <Dialog open={openContactForm} onClose={handleCloseContactForm}>
                <DialogTitle>Contactez-nous</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nom"
                        name="name"
                        type="text"
                        fullWidth
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                    />
                    <TextField
                        margin="dense"
                        label="Message"
                        name="message"
                        type="text"
                        multiline
                        rows={4}
                        fullWidth
                        value={contactForm.message}
                        onChange={handleContactFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseContactForm} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleContactFormSubmit} color="primary">
                        Envoyer
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Header;