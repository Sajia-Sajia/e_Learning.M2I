import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AnimatedCircle from './AnimatedCircle'; // Import du composant AnimatedCircle
import './AnimatedCircle.module.css'; // Import du fichier CSS pour les cercles animés

const WelcomeSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        position: 'relative', // Nécessaire pour les cercles positionnés
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Section Texte avec animation */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          zIndex: 1, // Priorité au texte
          backgroundColor: 'transparent',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 'bold',
            color: '#008fbf',
            textAlign: 'center',
            letterSpacing: '0.05em',
            marginBottom: '1rem',
          }}
        >
          Bienvenue sur <br />
          eLearning.M2I
        </Typography>

        {/* Cercles animés */}
        <AnimatedCircle size="50px" top="50px" left="100px" />
        <AnimatedCircle size="60px" top="150px" left="200px" />
        <AnimatedCircle size="70px" top="250px" right="300px" />
        <AnimatedCircle size="70px" top="350px" right="100px" />
        <AnimatedCircle size="70px" top="250px" left="50px" />
        <AnimatedCircle size="40px" top="150px" right="30px" />
        <AnimatedCircle size="40px" top="300px" left="30px" />
      </Box>

      {/* Section Image */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://th.bing.com/th/id/R.45cb873c207c94736b6351b336773ee4?rik=NDPGYRGANCQo1w&riu=http%3a%2f%2fdgoae.unam.mx%2fCOE%2fassets%2fimg%2fwhy-us.png&ehk=laya8hZFRpUb8DLK0rVE3VPcMW7u2ce%2f74%2bvKURdJe4%3d&risl=&pid=ImgRaw&r=0"
          alt="Étudiants M2I"
          style={{
            width: '700px',
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
          }}
        />
      </Box>
    </Box>
  );
};

export default WelcomeSection;
