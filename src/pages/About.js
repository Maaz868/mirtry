import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const image = require('../faiqi.jpg');


const About = () => {
  return (
    <div className="bg-light">
      <br></br>
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="text-center mb-5">
            <Image src={image} roundedCircle className="mb-3" width={150} height={150} />
            <h2 className="font-weight-bold">Faiq Jamawl</h2>
            <h5 className="text-muted">Content Creator</h5>
          </div>
          <p className="lead">
          Welcome to The Daily Muse, the ultimate platform for like-minded bloggers! We are passionate about empowering individuals to share their thoughts, stories, and expertise with the world. Our blogging application offers a seamless and user-friendly experience, enabling you to focus on what matters most: creating captivating content.

At The Daily Muse, we understand the value of connection and community. We believe that blogging is not just about writing; it's about building relationships, fostering discussions, and inspiring others. That's why our platform goes beyond being a mere tool for publishing articles. It's a vibrant ecosystem where bloggers from diverse backgrounds can come together, engage, and learn from one another.
          </p>
          <h3>Our Mission</h3>
          <p className="lead">
          

Our mission is to provide a supportive and inclusive platform that empowers bloggers to share their voices and make an impact. We strive to foster a sense of belonging, creativity, and continuous growth within our community.

Join us today and embark on an exciting journey of self-expression, knowledge-sharing, and building meaningful connections. Together, let's unleash the power of blogging!
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);
};

export default About;
