import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <header className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Garnr</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Overview</Link>
          <Link to="/analytics" className="hover:underline">Analytics</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
