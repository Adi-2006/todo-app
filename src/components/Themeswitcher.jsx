import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
//   Local storage se theme check karo
//   const storedTheme = localStorage.getItem("theme");
//   const initialTheme = storedTheme === "dark";
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center p-4">
      {/* iOS Style Switch */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 ${
          isDarkMode ? "justify-end" : "justify-start"
        }`}
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300"></div>
      </button>
    </div>
  );
}
