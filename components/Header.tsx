// React
import { useState, useEffect } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Assets
import DarkModeLogo from "@/public/assets/logos/dark-logo.png";
import LightModeLogo from "@/public/assets/logos/light-logo.png";
import MenuIcon from "@mui/icons-material/Menu";

// Packages
import { useTheme } from "next-themes";

// Icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  // Theme Variable (Dark or Light)
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Is Menu Open or Not (True of False)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  // Toggle Theme
  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
    setIsDarkMode(!isDarkMode);
  };

  // Nav Bar Links
  const navLinks = [
    { title: "home", link: "/#home" },
    { title: "about", link: "/#about" },
    { title: "skills", link: "/#skills" },
    { title: "gallery", link: "/#gallery" },
    { title: "contact me", link: "/#contactme" },
  ];

  return (
    <>
      <header className="h-[75px] md:h-[100px] duration-300 shadow-lg dark:shadow-lightSlateGray shadow-gainsboro relative z-10">
        {/* Start Container */}
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Start Logo */}
          <div className="logo h-[50px]">
            <Link href="/" className="h-[50px]">
              <Image
                src={DarkModeLogo}
                height={50}
                alt="El-Black Logo"
                className="select-none hidden dark:block"
              />
              <Image
                src={LightModeLogo}
                height={50}
                alt="El-Black Logo"
                className="select-none dark:hidden block"
              />
            </Link>
          </div>
          {/* End Logo */}

          {/* Start Navbar */}
          <nav className="hidden items-center gap-5 h-full md:flex">
            <ul className="flex m-0 px-5 items-center gap-8 capitalize h-full">
              {navLinks.map((item, index) => {
                return (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-lightSlateGray hover:text-amber dark:text-gainsboro dark:hover:text-blue h-full before:h-[3px] before:w-0 before:duration-300 hover:before:w-full before:absolute before:bg-amber dark:before:bg-blue before:bottom-0 relative flex flex-col justify-center items-center"
                  >
                    <li className="duration-300 text-lg">{item.title}</li>
                  </Link>
                );
              })}
            </ul>

            {/* Start Theme Switcher */}
            <div
              className="switcher w-[100px] h-[50px] rounded-full bg-eerieBlack dark:bg-cultured duration-300 relative cursor-pointer"
              onClick={toggleTheme}
            >
              <div className="ball w-[40px] h-[40px] absolute top-[50%] translate-y-[-50%] dark:bg-eerieBlack bg-cultured rounded-full flex justify-center items-center duration-500 dark:left-[55px] left-[5px]">
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </div>
            </div>
            {/* End Theme Switcher */}
          </nav>
          {/* End Navbar */}
          <div
            className="menu-icon md:hidden cursor-pointer select-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon fontSize="large" />
          </div>
        </div>
        {/* End Container */}

        {/* Start Menu */}
        <div
          className={`menu fixed top-0 left-0 w-[250px] bg-cultured dark:bg-eerieBlack h-screen z-[999] duration-300 flex flex-col gap-5 ${
            isMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
          }`}
        >
          {/* Start Top Menu */}
          <div className="top flex justify-between items-center p-3">
            <div className="logo h-[50px]">
              <Link href="/" className="h-[50px]">
                <Image
                  src={DarkModeLogo}
                  height={50}
                  alt="El-Black Logo"
                  className="select-none hidden dark:block"
                />
                <Image
                  src={LightModeLogo}
                  height={50}
                  alt="El-Black Logo"
                  className="select-none dark:hidden block"
                />
              </Link>
            </div>
            <div
              className="close-icon rounded-full w-[35px] h-[35px] shadow-sm shadow-dimGray dark:shadow-white flex justify-center items-center cursor-pointer select-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <CloseIcon fontSize="medium" />
            </div>
          </div>
          {/* End Top Menu */}

          {/* Start Nav Links */}
          <ul className="flex flex-col m-0 px-5 gap-3 capitalize">
            {navLinks.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <li className="text-lightSlateGray hover:text-amber dark:text-gainsboro dark:hover:text-blue duration-300 text-lg">
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>
          {/* End Nav Links */}

          {/* Start Bottom Menu */}
          <div className="bottom w-full py-5 flex justify-center items-center">
            <div
              className="switcher w-[100px] h-[50px] rounded-full bg-eerieBlack dark:bg-cultured duration-300 relative cursor-pointer"
              onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
            >
              <div className="ball w-[40px] h-[40px] absolute top-[50%] translate-y-[-50%] dark:bg-eerieBlack bg-cultured rounded-full flex justify-center items-center duration-500 dark:left-[55px] left-[5px]">
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </div>
            </div>
          </div>
        </div>
        {/* End Bottom Menu */}
        {/* Start Overlay */}
        <div
          className={`overlay bg-eerieBlack dark:bg-cultured w-screen h-screen top-0 fixed left-0 opacity-25 duration-300 z-[899] ${
            isMenuOpen ? "" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        {/* End Overlay */}

        {/* End Menu */}
      </header>
    </>
  );
};

export default Header;
