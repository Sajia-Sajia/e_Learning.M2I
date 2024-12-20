<<<<<<< HEAD
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assurez-vous d'importer correctement le Header
import Footer from '../components/Footer'; // Assurez-vous d'importer correctement le Footer

const ProgramPage = () => {
  const navigate = useNavigate();

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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
          padding: '20px',
        }}
      >
    
        {/* Image de la page */}
        <img src="/images/Test_M2I.png" alt="Programme M2I" style={{ maxWidth: '100%' }} />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ProgramPage;
=======
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; // Assurez-vous d'importer correctement le Header
import Footer from '../components/Footer'; // Assurez-vous d'importer correctement le Footer

const ProgramPage = () => {
  const navigate = useNavigate();

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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
          padding: '20px',
        }}
      >
    
        {/* Image de la page */}
        <img src="/images/Test_M2I.png" alt="Programme M2I" style={{ maxWidth: '100%' }} />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default ProgramPage;
>>>>>>> c76881e (premier commit)
