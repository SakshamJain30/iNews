import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => { 
  var pageSize = 5;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, SetProgress] = useState(0);
  const setProgress = (progress) => {
    SetProgress(progress);
  }
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <NavBar />

        {/* <News setprogress={setProgress} pageSize={pageSize} country="in" category="science" apikey="e435fc6a0bd94184894acbdf0a7197d6" 
        {apikey}/> */}
        <Routes>
          <Route exact path="/" element={<News setprogress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={apikey} />} />
          <Route exact path="/business" element={<News setprogress={setProgress} key="business" pageSize={pageSize} country="in" category="business" apiKey={apikey} />} />
          <Route exact path="/entertainment" element={<News setprogress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apikey} />} />
          <Route exact path="/general" element={<News setprogress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={apikey} />} />
          <Route exact path="/health" element={<News setprogress={setProgress} key="health" pageSize={pageSize} country="in" category="health" apiKey={apikey} />} />
          <Route exact path="/science" element={<News setprogress={setProgress} key="science" pageSize={pageSize} country="in" category="science" apiKey={apikey} />} />
          <Route exact path="/sports" element={<News setprogress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apikey} />} />
          <Route exact path="/technology" element={<News setprogress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apikey} />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App
