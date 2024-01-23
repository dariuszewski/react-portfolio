import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './card.css'

export default function MediaCard() {
  return (
    <div className='card-frame'>
        <Card sx={{ maxWidth: '90%', backgroundImage: 'linear-gradient(to top, rgb(33, 33, 33), rgb(10, 0, 48))' }}>
        <CardMedia
            sx={{ height: 140 }}
            image="src/assets/projects/flaskr_blog.png"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#ffffff"> 
            Lizard
            </Typography>
            <Typography variant="body2" color="#ffffff">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
        </Card>
    </div>
  );
}