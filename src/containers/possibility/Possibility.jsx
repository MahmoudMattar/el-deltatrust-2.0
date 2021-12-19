import React from "react";
import possibilityImage from "../../assets/possibility.png";
import { useTranslation } from "react-i18next";
import "./possibility.css";

const Possibility = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="gpt3__possibility-heading">
        <h1 className="gradient__text">
          {t("Procedures for obtaining")}, <br /> {t("Digital Signature")}
        </h1>
      </div>

      <div className="gpt3__possibility section__padding" id="possibility">
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
          <h4>{t("For individuals")}</h4>
          <h1 className="gradient__text">{t("possibility_1_header")}</h1>
          <p>{t("possibility_1_body")}</p>
          {/* <h4>Request Early Access to Get Started</h4> */}
        </div>
        <div className="gpt3__possibility-content">
          <h4>{t("For Companies")}</h4>
          <h1 className="gradient__text">
            {t("possibility_2_header")}
            <br />
          </h1>
          <p>
            {t("possibility_2_body-1")} <br />
            {t("possibility_2_body-2")}
          </p>
          {/* <h4>Request Early Access to Get Started</h4> */}
        </div>
      </div>
    </>
  );
};

export default Possibility;
