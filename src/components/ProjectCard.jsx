import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (title === 'Project 1') {
      navigate('/submissions');
    }
    if (title === 'Project 2') {
        navigate('/submissions');
      }
      if (title === 'Project 3') {
        navigate('/submissions');
      }
      if (title === 'Project 4') {
        navigate('/submissions');
      }
      if (title === 'Project 5') {
        navigate('/submissions');
      }
      if (title === 'Project 6') {
        navigate('/submissions');
      }
     
  };

  return (
    <Card className="mb-3" style={{ backgroundColor: '#1e1e1e', color: 'white', cursor: 'pointer' }} onClick={handleCardClick}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
