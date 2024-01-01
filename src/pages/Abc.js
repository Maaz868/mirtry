import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,Avatar, AppBar,Card,CardContent,CardMedia,CssBaseline,Grid,Toolbar, Container,Box,Link,createTheme,ThemeProvider} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '150px',
    // backgroundImage: `url('https://culturetourist.com/wp-content/uploads/2022/03/P1100351-630x420.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px', 
    backgroundColor: '#d8e4fb',
  },
  title: {
    color: '#000000',
    fontSize: '18px',
    margin: '20px',
    // background-color: '#000000',
    fontWeight: 100,
    textAlign: 'center',
    // textShadow: '2px 2px #000000',
  },
 
}));

function Abc() {
  const classes = useStyles();
  return (
    <div>
<Typography className={classes.root} variant="h6" >
               At Zeta, we specialize in developing cutting-edge machine learning and AI solutions for businesses across industries. Our expertise includes developing advanced algorithms, models, and applications to optimize processes, automate tasks, and unlock valuable insights from data. Partner with us to harness the power of AI and drive meaningful impact for your organization.
              </Typography>
    </div>
  );
}

export default Abc;
