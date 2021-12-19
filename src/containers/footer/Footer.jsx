import React from "react";
import eldeltatrust from "../../assets/deltaTrust.png";
import { useTranslation } from "react-i18next";

import "./footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          {t("Do you want to step into the future before others")}
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>{t("Request Early Access to Get Started")}</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={eldeltatrust} alt="El-deltaTrust_logo" />
          <p>
            El-Delta Trust, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>

          <p>
            <a href="tel:15715">15715</a>
          </p>
          <p>
            <a href="mailto:info@el-deltatrust.com">info@el-deltatrust.com</a>
          </p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 El-Delta. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
