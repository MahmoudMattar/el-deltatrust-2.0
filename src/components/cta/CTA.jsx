import React from "react";
import { useTranslation } from "react-i18next";

import "./cta.css";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{t("Request Early Access to Get Started")}</p>
        <h3>
          {t(
            `Register Today & start exploring the endless possibilities of digital signature`
          )}
          .
        </h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href="mailto:info@el-deltatrust.com">{t("Get Started")}></a>
      </div>
    </div>
  );
};

export default CTA;
