import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route path ='/home'>
          <Home />
        </Route>
        <Route path ='/contact'>
          <Contact />
        </Route>
      </Switch> */}
      <Footer />
    </Router>
  );
}

export default App;
