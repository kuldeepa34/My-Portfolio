import './App.css';
import { useTheme } from "./context/ThemeContext";
import Theme1Layout from "./layouts/Theme1Layout";
import Theme2Layout from "./layouts/Theme2Layout";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {/* 🌈 Water Droplet Button */}
      <button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center
          border border-white/20 backdrop-blur-xl hover:scale-105 active:scale-95
          ${
            theme === "theme1"
              ? "bg-[conic-gradient(at_top_left,_#00ffff,_#00ffcc,_#ffccff,_#ff99ff,_#ccffff,_#00ffff)] shadow-[inset_0_0_10px_rgba(255,255,255,0.4),_0_10px_30px_rgba(0,0,0,0.25)]"
              : "bg-gradient-to-br from-gray-800 via-slate-700 to-blue-900 shadow-[inset_0_0_10px_rgba(0,0,0,0.5),_0_10px_30px_rgba(0,0,0,0.4)]"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 transition-colors duration-300 ${
            theme === "theme1" ? "text-white" : "text-gray-200"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l.707.707M21 12h-1M4 12H3m16.485 4.485l-.707-.707M4.929 19.071l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </button>

      {/* 🧩 Layout Switcher */}
      {theme === "theme1" ? <Theme1Layout /> : <Theme2Layout />}
    </div>
  );
}

export default App;
