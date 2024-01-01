/* Header.js */
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

function AddBlogPost(){

    const [formData, setFormData] = useState({
        author: '',
        content: '',
        title: '',
        imgSrc: '',
        date: '',
        authorImg: ''
      });
      const classes = useStyles();
      const navigate = useNavigate();
      const handleSubmit = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:3000/posts', {
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
              Create a new blog post
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="content"
                label="Content"
                name="content"
                autoComplete="content"
                multiline
                rows={4}
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="imgSrc"
                label="Image URL"
                name="imgSrc"
                autoComplete="imgSrc"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="author"
                label="Author"
                name="author"
                autoComplete="author"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="authorImg"
                label="Author Image"
                name="authorImg"
                autoComplete="authorImg"
                autoFocus
                onChange={handleChange}
              />
              
              
              
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                autoComplete="date"
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
        </Container>
      );
    };
export default AddBlogPost;
