import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Header = ({ showSemester }) => {
    const [anchorElProgram, setAnchorElProgram] = useState(null);
    const [anchorElOpportunite, setAnchorElOpportunite] = useState(null);
    const [openContactForm, setOpenContactForm] = useState(false);
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

    const navigate = useNavigate();

    const handleProgramClick = () => {
        navigate('/ProgramPage');
        handleCloseMenus();
    };

    const handleOpenMenu = (setAnchorEl) => (event) => setAnchorEl(event.currentTarget);
    const handleCloseMenus = () => {
        setAnchorElProgram(null);
        setAnchorElOpportunite(null);
    };

    const handleOpenContactForm = () => setOpenContactForm(true);
    const handleCloseContactForm = () => setOpenContactForm(false);

    const handleContactFormChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const handleContactFormSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_jgawclq',
                'template_gedzw5f',
                { ...contactForm },
                'gTIz9zM9FyaFhrvU3'
            )
            .then(() => {
                return emailjs.send(
                    'service_jgawclq',
                    'template_gxh492d',
                    { ...contactForm },
                    'gTIz9zM9FyaFhrvU3'
                );
            })
            .then(() => {
                handleCloseContactForm();
            })
            .catch((error) => console.error('Error sending email:', error));
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{ backgroundColor: 'white', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', height: '80px' }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ marginLeft: '20px', marginRight: '50px', position: 'relative' }}>
                        <img
                            src="/images/newlogo.png"
                            alt="Logo"
                            style={{
                                height: '150px',
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        />
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '30px', flexGrow: 1 }}>
                        <Button sx={{ color: 'black' }} onClick={() => navigate('/')}>
                            <HomeIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Home
                        </Button>

                        <Button sx={{ color: 'black' }} onClick={handleProgramClick}>
                            <MenuBookIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Programme
                        </Button>

                        <Button sx={{ color: 'black' }} onClick={handleOpenMenu(setAnchorElOpportunite)}>
                            <BusinessCenterIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Opportunités
                        </Button>
                        <Menu anchorEl={anchorElOpportunite} open={Boolean(anchorElOpportunite)} onClose={handleCloseMenus}>
                            <MenuItem
                                onClick={() => window.open('https://www.linkedin.com', '_blank')}
                                sx={{ display: 'flex', alignItems: 'center' }}
                            >
                                <LinkedInIcon sx={{ marginRight: '10px', color: '#0077b5' }} />
                                LinkedIn
                            </MenuItem>
                            <MenuItem onClick={() => window.open('https://www.indeed.com', '_blank')}>
                                Indeed
                            </MenuItem>
                        </Menu>

                        <Button sx={{ color: 'black' }} onClick={handleOpenContactForm}>
                            <MailOutlineIcon sx={{ marginRight: '5px', color: 'rgba(128, 128, 128, 0.5)' }} />
                            Contactez-nous
                        </Button>
                    </Box>

                    <Link to="/Login">
                        <Button
                            sx={{
                                backgroundColor: '#008fbf',
                                color: 'white',
                                borderRadius: '20px',
                                width: '120px',
                                height: '40px',
                                marginRight: '20px',
                                '&:hover': { backgroundColor: '#00c9f2' },
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
