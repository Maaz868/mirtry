/* Header.js */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Paper,Avatar, AppBar,Card,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Box,createTheme,ThemeProvider} from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const image = require('../faiqi.jpg');

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  imageContainer: {
    width: '100%',
    height: '60vh',
    position: 'relative',
    marginBottom: theme.spacing(2),
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    maxWidth: '800px',
    margin: theme.spacing(2),
  },
}));



function Blog(){
  const { state } = useLocation();
  const classes = useStyles();
  
  if (!state) {

    return <div>Loading...</div>;
  }

  // const { post } = state;
  return (
    
    <Container className="my-5">
    <Row className="justify-content-center">
    <Col lg={8}>
      {/* The logical error here is that we are calling a variable from state that doesnt exist. */}
    {/* <h1>{state.var1}</h1> */}
    <h1 className="text-center mb-5" style={{ textShadow: '10px 10px 50px grey'}}>{state.title}</h1>
    <div className="d-flex align-items-center mb-4">
    <Image src={state.authorImg} roundedCircle className="mr-3" width={50} height={50} />
    <div>
    <h5 className="font-weight-bold mb-0">{state.author}</h5>
    <p className="text-muted mb-0">{state.date}</p>
    </div>
    </div>
    <Image
             src={state.imgSrc}
             fluid
             
             className="mb-5"
             alt="Blog Post Image"
             style={{ width: '100%', height: '500px', boxShadow: '5px 5px 50px grey' }}
           />

    <p className="mb-4" style={{fontSize: '20px', fontFamily: 'Arial, sans-serif', color:'black'}}>
    {state.content}
    </p>
  
    </Col>
    </Row>
    </Container>
    );
    };
export default Blog;
