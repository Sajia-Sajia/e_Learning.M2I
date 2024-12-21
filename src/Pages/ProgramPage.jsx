import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assurez-vous d'importer correctement le Header
import Footer from '../components/Footer'; // Assurez-vous d'importer correctement le Footer

const ProgramPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirige vers la page d'accueil ("/")
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            {/* Header */}
            <Header />

            {/* Section principale */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexGrow: 1,
                    padding: '20px',
                }}
            >
                {/* Titre avec Logo */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '20px',
                        backgroundColor: '#f5f5f5',
                        height: '80px', // Hauteur fixe
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '20px',
                        }}
                    >
                        <img
                            src="/images/newlogo.png"
                            alt="Logo"
                            style={{
                                height: '150px',
                                objectFit: 'contain',
                                marginRight: '20px',
                            }}
                        />
                        Programme de M2I
                    </Typography>

                    {/* Bouton Home */}
                    <IconButton
                        onClick={handleGoHome}
                        sx={{
                            marginLeft: 'auto',
                            marginRight: '20px',
                        }}
                    >
                        <HomeIcon sx={{ color: 'rgba(128, 128, 128, 0.5)' }} />
                    </IconButton>
                </Box>

                {/* Image principale */}
                <img
                    src="/images/Test_M2I.png"
                    alt="Programme M2I"
                    style={{ maxWidth: '100%' }}
                />
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default ProgramPage;
