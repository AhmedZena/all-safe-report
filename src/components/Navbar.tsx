// import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../public/assets/imgs/logo.png";

const Navbar = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav style={styles.navbar}>
      <img src={logo} alt="Logo" style={styles.logo} />
      <span style={styles.title}>Your App Name</span>
      <button onClick={toggleLanguage} style={styles.languageButton}>
        {i18n.language.toUpperCase()}
      </button>
    </nav>
  );
};

// Add styles here
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    height: "50px", // Adjust as needed
  },
  title: {
    flex: 1,
    textAlign: "center" as "center",
  },
  languageButton: {
    padding: "10px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Navbar;
