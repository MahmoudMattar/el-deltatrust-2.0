import React from "react";
import Feature from "../../components/feature/Feature";
import { useTranslation } from "react-i18next";

import "./whatEldeltatrust.css";

const WhatEldeltatrust = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={t("What is El-Delta Trust")} text={t("main_1")} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">{t("main_2")}</h1>
        <p>{t("main_3")}</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title={t("feature_1_header")} text={t("feature_1_body")} />
        <Feature title={t("feature_2_header")} text={t("feature_2_body")} />
        <Feature title={t("feature_3_header")} text={t("feature_3_body")} />
      </div>
    </div>
  );
};

export default WhatEldeltatrust;
