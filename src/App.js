import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [secondButtonClick, setSecondButtonClick] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col dark:bg-black dark:text-white">
      <h1 className="text-5xl text-center font-extrabold mb-9">
        Lorem ipsum dolor sit amet
      </h1>
      <button
        className="absolute right-10 top-10 bg-black text-white px-5 py-3 rounded hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
        onClick={() => setDarkMode(!darkMode)}
        disabled={!secondButtonClick}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <p className="w-[50%] text-xl text-center mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
            </p>
      <button
        className="text-white bg-blue-900 rounded px-5 py-3 hover:bg-blue-500"
        onClick={() => setSecondButtonClick(true)}
      >
        Get started
      </button>
    </div>
  );
}
