import React from "react";
import Feature from "../../components/feature/Feature";
import { useTranslation, getI18n } from "react-i18next";
import "./features.css";

const featuresData = [
  {
    title: "Registration",
    text: "Ensuring the security and confidentiality of private data",
  },
  {
    title: "E-Selling",
    text: "E-commerce, software distribution, financial transactions, and other situations that rely on forgery and tampering detection techniques are some of the examples where digital signatures can be misused",
  },
  {
    title: "USB token for Digital signature Certificate (DSC)",
    text: "The USB token has unique in-built software that enables users to identify and open digital signatures",
  },
  {
    title: "Time Stamp",
    text: "Time stamping is an important mechanism for the long-term preservation of digital signatures, time sealing of data objects to prove when they were received, protecting copyright and intellectual property and for the provision of notarization services",
  },
];

const Features = () => {
  const { t } = useTranslation();
  const { language } = getI18n();

  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          {t(
            "Get the most of digital cyber security and digitize your signature"
          )}
        </h1>
        <p>{t("Request Early Access to Get Started")}</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={t(item.title)}
            text={t(item.text)}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
