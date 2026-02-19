import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#F9F7F2]">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/carta" element={<MenuPage />} />
          </Routes>
        </main>

        <Footer />
        <AIChatbot />
      </div>
    </Router>
  );
};

export default App;
