import "./App.css";
import "./css/style.css";
import "./css/style.min.css";
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Routes, Link,useRouteMatch,
  useParams } from "react-router-dom";
// import Home from "./Component/home";
// import About from "./Component/about";
// import Blog from "./Component/blog";
// import Contact from "./Component/contact";
// import Error from './Component/error';
import Navbar from "./Component/project/navbar";
import About from './Component/project/about';  
import Blog from './Component/project/blog';  
import Home from './Component/project/home';  
import Service from './Component/project/service';  
import Project from './Component/project/project';
import Singal from "./Component/project/single";
import Footer from "./Component/project/footer";


const App = () => {
  return (
    <>


      <Router>
          <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/signal" element={<Singal />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
       	{/* <Route element = {<Error />} /> */}
          </Routes>
          <Footer />
      </Router>



      </>
  );
}

export default App;
