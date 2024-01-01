import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,Avatar, AppBar,Card,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container,Box,Link,createTheme,ThemeProvider} from '@material-ui/core';
import blog from '../blog.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import blog1 from '../blog.jpg';
import blog2 from '../blog2.png';
import blog3 from '../blog3.jpg';

const image = require('../blog.jpg');

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '500px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  title: {
    color: '#00008b',
    fontSize: '36px',
    fontWeight: 700,
    textAlign: 'center',
    textShadow: '2px 2px #000000',
  },extra: {
    width: '100%',
    padding: '20px',
    height: '200px',
    // backgroundImage: `url('https://culturetourist.com/wp-content/uploads/2022/03/P1100351-630x420.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a8b6bd',

  },blogs: {
    width: '100%',
    padding: '50px',
    height: '10px',
    // backgroundImage: `url('https://culturetourist.com/wp-content/uploads/2022/03/P1100351-630x420.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    fontSize: '36px',
    fontWeight: 700,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5f9ea0',
    textShadow: '1.5px 1.5px #000000',
    color: '#00008b',

  },sliderContainer: {
    width: '100%',
    height: '200px',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImage: {
    objectFit: 'cover',
    height: '500px',
  },
}));

function WelcomePhoto() {
  const classes = useStyles();
  const image = require('../blog.jpg');
  return (
    <div>

    <br />
    <br />
    <br />
    
    <div className={classes.sliderContainer}>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000} // Adjust the interval as needed (e.g., 5000ms = 5 seconds)
        >
          <div>
            <img src={blog1} alt="Blog 1" className={classes.sliderImage} />
          </div>
          <div>
            <img src={blog2} alt="Blog 2" className={classes.sliderImage} />
          </div>
          <div>
            <img src={blog3} alt="Blog 3" className={classes.sliderImage} />
          </div>
        </Carousel>
      </div>
    <br/>
    <br />
    <br />
    <br />
    <div>
<Typography style={{ color: 'black', textShadow: '2px 2px 5px grey' }} className={classes.extra} variant="h6" >
"Welcome to our blogging app! This is a space where we share our thoughts, ideas, and experiences with the world. Whether it's about our latest travel adventures, favorite recipes, or just musings on life, I hope you find something here that resonates with you. Thank you for visiting, and we hope you enjoy your time here!"    </Typography>
    </div>
    <br></br>
    <div>
<Typography className={classes.blogs} variant="h6" >
<h2>"BLOGS AROUND THE WORLD"   </h2> </Typography>
    </div>
    </div>
  );
}

export default WelcomePhoto;
