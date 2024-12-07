import React from 'react';

const ThemeChange = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeChange;
