import BlogPost from '../BlogPost';
import '../App.css';
import {Typography,Paper,makeStyles,Avatar, AppBar,Card,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container,Box,createTheme,ThemeProvider} from '@material-ui/core';
import WelcomePhoto from './WelcomePhoto';
import Abc from './Abc';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#212121", // Update with your desired background color
    minHeight: "100vh", // Set the height of the page
  },
  appBar: {
    backgroundColor: "#e0e0e0", // Set the background color of the app bar
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  introContainer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: "#a8b6bd"
  },
  introHeading: {
    marginBottom: theme.spacing(3),
  },
  introText: {
    marginBottom: theme.spacing(2),
  },
  introImage: {
    width: "100%",
    height: "auto",
  },
  aboutContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  aboutGrid: {
    alignItems: "center",
    paddingLeft: '100px',
  },
  aboutImage: {
    width: "100%",
    height: "auto",
  },
  aboutTextContainer: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    
  },
  aboutHeading: {
    marginBottom: theme.spacing(2),
  },
  cardContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: "#FFFFFF",
  },
  cardGrid: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },
  card: {
    maxWidth: 1000,
    margin: theme.spacing(2),
    backgroundColor: "#bec2c4", // Update with your desired card background color

  },
  cardMedia: {
    height: 200,
    textDecoration: 'none',
  },
  
}));

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random/?blog/',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};


function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const renderPosts = async () => {
      let url = 'http://localhost:3000/posts';
      const res = await fetch(url);
      const posts = await res.json();
      setBlogPosts(posts);
    };

    renderPosts();
  }, []);

  return (
      <div>
        <WelcomePhoto />
        <br/>
        {/* <Abc /> */}
      

        
        
        <Grid container spacing={3} className={classes.cardGrid}>   
          {blogPosts.map(post => (
            <Grid item xs={12} sm={6}>
             
             <Link to={`/Blog`} style={{ textDecoration: 'none' }} state={post}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.imgSrc}
                  title={post.title}
                />
                
                <CardContent>
                  <Typography style={{ fontSize: '30px', color: 'black', textShadow: '2px 2px 5px grey' }}  gutterBottom variant="h5" component="h2">
                  {post.title}
                  </Typography>
                  <Typography style ={{ fontSize: '15px', textAlign: 'right', textShadow: '10px 10px 50px grey'}} variant="body2" color="textSecondary" component="p">
                    {post.author}
                  </Typography>
                  <Typography style ={{ fontSize: '15px', textAlign: 'right', textShadow: '10px 10px 50px grey'}} variant="body2" color="textSecondary" component="p">
                    {post.date}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      
      </div>
    );
  
}

export default Home;
