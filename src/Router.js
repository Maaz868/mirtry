import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes } from 'react-router-dom/dist';
import Blog from './pages/Blog';
import Sign from './pages/Sign';
import AddBlogPost from './pages/AddBlogPost';
import SignIn from './pages/SignIn';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';



function Router() {


 

    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
             <Route path="/" element={<Sign />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/Blog" element={<Blog />} />
             <Route path="/AddBlog" element={<AddBlogPost />} />
   
         </Routes>
    );
  }
export default Router;  