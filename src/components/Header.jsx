import React, { useState, useEffect } from "react";
import companyLogo from "../assets/cl.png";
import "../Styles/Header.css";
import menuIcon from "../assets/menu-b.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 800;
      setIsMobileView(isMobile);
      if (!isMobile && isMenuOpen) {
        setIsMenuOpen(false); // Close menu when resizing to a larger screen
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header-main">
        <img src={companyLogo} alt="Company Logo" className="logo" />
        <div className="nav">
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Partners</a>
        </div>
        {isMobileView && (
          <img
            src={menuIcon}
            id="menu"
            alt="Menu Icon"
            onClick={toggleMenu}
            className="menu-icon"
          />
        )}
      </header>
      {isMenuOpen && isMobileView && (
        <div className="nav-bar">
          <a href="/">About</a>
          <a href="/">Service</a>
          <a href="/">Partners</a>
        </div>
      )}
    </>
  );
};

export default Header;
