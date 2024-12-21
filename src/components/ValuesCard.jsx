import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { School, Group, Computer } from '@mui/icons-material';

const values = [
  {
    title: 'Excellence Académique',
    description: "Nous nous engageons à offrir une formation de haute qualité, favorisant le développement des compétences et l'excellence académique.",
    icon: <School sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://images.radio-canada.ca/v1/ici-premiere/16x9/etudiants-informatique-technologie-formation.jpg)',
  },
  {
    title: 'Collaboration et Communauté',
    description: "Encourager un esprit de collaboration entre étudiants, professeurs et administration pour créer un environnement d'apprentissage enrichissant.",
    icon: <Group sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://mvistatic.com/photosmvi/2020/07/01/P23125920D4157180G.jpg)',
  },
  {
    title: 'Technologie Innovante',
    description: "Utiliser les technologies les plus récentes pour proposer des ressources éducatives interactives et accessibles via la plateforme eLearning.",
    icon: <Computer sx={{ fontSize: 40 }} />,
    backgroundImage: 'url(https://marketingelectronique.com/wp-content/uploads/2020/05/E-learning-2048x1365.jpg)',
  },
];

const ValuesCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '2rem',
      }}
    >
      {values.map((value, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 350,
            margin: '1rem',
            boxShadow: 3,
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardContent
            sx={{
              position: 'relative',
              backgroundImage: value.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              padding: '1rem',
              borderRadius: '8px',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(34, 106, 151, 0.5)',
                backdropFilter: 'blur(5px)',
                zIndex: 1,
              },
            }}
          >
            <IconButton sx={{ color: 'white', zIndex: 2 }}>{value.icon}</IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginTop: 1, zIndex: 2 }}
            >
              {value.title}
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ textAlign: 'center', marginTop: 1, zIndex: 2 }}
            >
              {value.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ValuesCard;
