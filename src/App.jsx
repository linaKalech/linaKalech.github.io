import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header';
import WorkPage from './pages/workPage';
import InfoPage from './pages/infoPage';
import Footer from './components/footer';

const App = () => {
  const [isWorkActive, setIsWorkActive] = useState(true);

  return (
    <Router>
      <div className="relative h-screen bg-black overflow-hidden">
        {/* Global Background Circles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-pink-500 opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          <Header isWorkActive={isWorkActive} setIsWorkActive={setIsWorkActive} />
          <Routes>
            <Route path="/" element={<WorkPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
