import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { useParams,useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import '../Contact.css'; // import the CSS file



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Feedback: '',
  });
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/home');
        // Redirect the user to the blog post page or some other page
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography style ={{ fontSize: '36px', textAlign: 'right', textShadow: '2px 2px 5px grey'}} component="h1" variant="h5">
          Submit your Feedback!
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            onChange={handleChange}
          />
          <br></br>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          /><br></br>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="message"
            label="message"
            name="message"
            autoComplete="message"
            multiline
            rows={4}
            onChange={handleChange}
          />
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
    </Container>
  );
};

export default Contact;
