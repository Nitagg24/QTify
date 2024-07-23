import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

function Carditem({item}) {
    const cardStyle = {
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '2px solid #ffffff',
        borderRadius: '10px 10px 0px 0px',
        color: '#ffffff',
        width:'159px',
        height:'205px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
        },
        position:'relative',
      };

      const titleStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '16px',
      };

  return (
        <Card sx={cardStyle}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={titleStyle}>{item.title}</Typography>
          </Box>
           { item.follows && <Chip label={`${item.follows} follows`} sx={{borderRadius:10,padding:'4px, 8px, 4px, 8px',backgroundColor:'#121212',color:'white'}} />
}
        </Card>
  );
}

export default Carditem;
