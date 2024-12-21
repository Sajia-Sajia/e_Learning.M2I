import React from 'react';
import Box from '@mui/material/Box';

const MotivationBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '60px', // Ajustement du padding
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px',
        borderLeft: '5px solid transparent',
        position: 'relative',
        height: '200px', // Hauteur ajustée
        width: '800px', // Largeur ajustée
        margin: '20px 0 0 20px',
        zIndex: 1,
        borderTopLeftRadius: '500px',
        borderBottomLeftRadius: '500px',
        backgroundImage: `
          linear-gradient(rgba(64, 155, 212, 0.5), rgba(64, 155, 212, 0.5)),
          url('https://th.bing.com/th/id/R.f278011f51f3d23dec18c2a1ca1bc551?rik=XrMu1WefGZnF2Q&pid=ImgRaw&r=0')
        `,
        backgroundColor: '#e0f7fa',
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Ajoutez d'autres contenus ou styles ici si nécessaire */}
    </Box>
  );
};

// Composant principal
const Page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '20px',
      }}
    >
      <MotivationBox />
    </Box>
  );
};

export default Page;
