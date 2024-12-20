import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Popover, List, ListItem, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import emailjs from 'emailjs-com';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ showSemester }) => {
    const [anchorElProgram, setAnchorElProgram] = useState(null);
    const [anchorElOpportunite, setAnchorElOpportunite] = useState(null);
    const [openContactForm, setOpenContactForm] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const navigate = useNavigate(); // Pour la navigation vers ProgramPage

    const handleProgramOpen = (event) => setAnchorElProgram(event.currentTarget);
    const handleProgramClose = () => setAnchorElProgram(null);

    const handleOpportuniteOpen = (event) => setAnchorElOpportunite(event.currentTarget);
    const handleOpportuniteClose = () => setAnchorElOpportunite(null);

    const handleProgramClick = () => {
        navigate('/ProgramPage');  // Redirection vers la page ProgramPage
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

        // Envoi de l'email à l'admin
        emailjs.send('service_jgawclq', 'template_gedzw5f', {
            name: contactForm.name,
            email: contactForm.email,
            message: contactForm.message
        }, 'gTIz9zM9FyaFhrvU3')
        .then((response) => {
            console.log('Email sent successfully to admin', response.status, response.text);

            // Envoi d'un email de confirmation à l'utilisateur
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

    const popoverStyles = {
        backgroundColor: '#e0f7fa',
        padding: '10px',
        borderRadius: '8px',
        width: '200px',
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={() => handleScrollToSection('home')}>
                            <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Home
                        </Button>

                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={handleProgramClick}>
                            <MenuBookIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Programme
                        </Button>

                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={handleOpportuniteOpen}>
                        <BusinessCenterIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                           Opportunités de Carrière
                         </Button>
                        <Menu
                           anchorEl={anchorElOpportunite}
                           open={Boolean(anchorElOpportunite)}
                           onClose={handleOpportuniteClose}
      >
                        <MenuItem onClick={() => window.open('https://www.linkedin.com', '_blank')}>LinkedIn</MenuItem>
                        <MenuItem onClick={() => window.open('https://www.indeed.com', '_blank')}>Indeed</MenuItem>
                        <MenuItem onClick={() => window.open('https://www.allmyjobs.com', '_blank')}>AllMyAlert</MenuItem>
                        <MenuItem onClick={() => window.open('https://www.edx.org', '_blank')}>edX</MenuItem>
                        <MenuItem onClick={() => window.open('https://www.coursera.org', '_blank')}>Coursera</MenuItem>
                        </Menu>

                        <Button sx={{ margin: '0 10px', color: 'black' }} onClick={handleOpenContactForm}>
                            <MailOutlineIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Contactez-nous
                        </Button>
                    </Box>

                    <Link to="/Login">
                        <Button
                            sx={{
                                margin: '0 35px',
                                backgroundColor: '#008fbf',
                                color: 'white',
                                borderRadius: '20px',
                                width: '120px',
                                height: '40px',
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

            {/* Contact Form Dialog */}
            <Dialog open={openContactForm} onClose={handleCloseContactForm}>
                <DialogTitle>Contactez-nous</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Nom" name="name" type="text" fullWidth value={contactForm.name} onChange={handleContactFormChange} />
                    <TextField margin="dense" label="Email" name="email" type="email" fullWidth value={contactForm.email} onChange={handleContactFormChange} />
                    <TextField margin="dense" label="Message" name="message" type="text" multiline rows={4} fullWidth value={contactForm.message} onChange={handleContactFormChange} />
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
