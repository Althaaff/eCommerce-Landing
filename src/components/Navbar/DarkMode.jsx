import lightMode from "../../assets/ecomImg/lightMode.png";
import darkMode from "../../assets/ecomImg/darkMode.png";
import React from "react";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  console.log("light :", theme);

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={lightMode}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        alt="light-mode"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={darkMode}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        alt="dark-mode"
        className="w-12 cursor-pointer  drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
