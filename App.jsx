import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Overview from "./Overview";
import Analytics from "./Analytics";
import { Sun, Moon } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <div className="text-2xl font-bold">Garnr</div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:underline">Overview</Link>
            <Link to="/analytics" className="hover:underline">Analytics</Link>
            <button onClick={() => setDarkMode(!darkMode)} className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
// placeholder content for App.jsx
