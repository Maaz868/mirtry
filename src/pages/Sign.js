/* Header.js */

import React from 'react';
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Image } from 'react-bootstrap';
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function Sign(){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();






    const handleSubmit = (event) => {
        event.preventDefault();
      


        
        fetch(`http://localhost:3000/users?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (data.length > 0 && data[0].password === password) {
              
              console.log('Login success:', data[0]);
              navigate('/home');
              
             
              // Redirect the user to the dashboard or some other page
            } else {
                document.getElementById("hello").innerHTML="Invalid Credentials"
              console.error('Invalid email or password');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };
      
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
          <Typography style={{fontSize:'36px', textShadow: '5px 5px 5px grey'}} component="h1" variant="h5" id="hello">
            Sign in
          </Typography>
          <br></br>
          
         
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link to="/signin">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </form>
        </div>
      </Container>
    );
  }

export default Sign;
