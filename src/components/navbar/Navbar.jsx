import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/deltaTrust.png";
import LanguageSelect from "../../../src/LanguageSelect";
import { useTranslation, getI18n } from "react-i18next";
import "./navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { language } = getI18n();

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">{t("Home")}</a>
          </p>
          <p>
            <a href="#wgpt3"> {t("About")}</a>
          </p>
          <p>
            <a href="#possibility">{t("Join us")}</a>
          </p>
          <p>
            <a href="#features">{t("Services")} </a>
          </p>
          <p>
            <a href="#blog"> {t("Service")}</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <div className="language-select">
          <LanguageSelect />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className="gpt3__navbar-menu_container scale-up-center"
            style={language === "ar" ? { left: "0" } : { right: "0" }}
          >
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">{t("Home")}</a>
              </p>
              <p>
                <a href="#wgpt3"> {t("What is El-Delta Trust?")}</a>
              </p>
              <p>
                <a href="#possibility">{t("Join us")}</a>
              </p>
              <p>
                <a href="#features">{t("Case Studies")} </a>
              </p>
              <p>
                <a href="#blog"> {t("Service")}</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <div className="language-select">
                <LanguageSelect />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
