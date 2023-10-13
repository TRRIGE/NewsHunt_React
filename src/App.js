
import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    //const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)
    
  return (
    <Router>
      <NavBar />
      <LoadingBar
        color='#f11945'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="General" pageSize={5} category='General' country='in' />}></Route>
        <Route exact path="/Business" element={<News setProgress={setProgress} key="Business" pageSize={5} category='Business' country='in' />}></Route>
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="Entertainment" pageSize={5} category='Entertainment' country='in' />}></Route>
        <Route exact path="/General" element={<News setProgress={setProgress} key="General" pageSize={5} category='General' country='in' />}></Route>
        <Route exact path="/Health" element={<News setProgress={setProgress} key="Health" pageSize={5} category='Health' country='in' />}></Route>
        <Route exact path="/Science" element={<News setProgress={setProgress} key="Science" pageSize={5} category='Science' country='in' />}></Route>
        <Route exact path="/Sports" element={<News setProgress={setProgress} key="Sports" pageSize={5} category='Sports' country='in' />}></Route>
        <Route exact path="/Technology" element={<News setProgress={setProgress} key="Technology" pageSize={5} category='Technology' country='in' />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;