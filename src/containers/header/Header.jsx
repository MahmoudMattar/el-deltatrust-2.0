import React from "react";
import people from "../../assets/people.png";
import { useTranslation } from "react-i18next";
import ai from "../../assets/ai.png";
import "./header.css";

// When the user clicks on <div>, open the popup
function myFunction() {
  var mainEmailBtnSub = document.getElementById("mainEmailBtnSub");
  var popup = document.getElementById("myPopup");

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mainEmailBtnSub.value)
  ) {
    popup.innerText = "Thanks for subscribe..";
    popup.classList.toggle("show");
    setTimeout(() => {
      popup.classList.toggle("show");
    }, 2000);
    return true;
  }
  popup.innerText = "You have entered an invalid email address!";
  popup.classList.toggle("show");
  setTimeout(() => {
    popup.classList.toggle("show");
  }, 3000);

  return false;
}

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{t("Header__title")}</h1>
        <p> {t("Header__subTitle")}</p>

        <div className="gpt3__header-content__input popup">
          <span className="popuptext" id="myPopup"></span>
          <input
            id="mainEmailBtnSub"
            type="email"
            placeholder="Your Email Address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <button type="button" onClick={myFunction}>
            {t("Get Started")}
          </button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>{t("Header__footer")}</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
