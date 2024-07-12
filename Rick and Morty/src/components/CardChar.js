import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CharacterCard = ({ character }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '300px',
    margin: '10px',
    position: 'relative', 
  };
 
  const mediaStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  const nameStyle = {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '8px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '90%',
  };

  const detailsStyle = {
    marginTop: '40px', 
    textAlign: 'center',
  };

  return (
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        alt={character.name}
        height="200"
        image={character.image}
        title={character.name}
        style={mediaStyle}
      />
      <CardContent style={{ position: 'relative' }}>
        <div style={nameStyle}>
          <Typography variant="h6">{character.name}</Typography>
        </div>
        <div style={detailsStyle}>
          <Typography variant="body2" color="primary" component="p">
            <strong>Status:</strong> {character.status}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <strong>Species:</strong> {character.species}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <strong>Gender:</strong> {character.gender}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <strong>Origin:</strong> {character.origin.name}
          </Typography>
          <Typography variant="body2" color="primary" component="p">
            <strong>Last Location:</strong> {character.location.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
