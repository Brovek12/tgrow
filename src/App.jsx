import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <NavBar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/page2" element={<PageTwo />} />
            <Route path="/page4" element={<PageFour />} />
            <Route path="/result" element={<PageFive />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
