import React from "react";
import img1 from "../assets/images/monkey.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function SuccessMessage(props) {
  const { t } = useTranslation();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="registration-form">
      {!loaded ? (
        <Loader />
      ) : (
        <div
          style={{ color: "#fff", marginTop: 50 }}
          className="successMessage"
        >
          <h2>{t("Success")}</h2>
          <img src={img1} alt="Monkey Illustration" />
          <h4>{t("Info")}</h4>
          <p>
            {t("Name")}: {props.data.firstName}
          </p>
          <p>
            {t("LastName")}: {props.data.lastName}
          </p>
          <p>
            {t("Username")}: {props.data.username}
          </p>
          <p>
            {t("Phone")}: {props.data.phone}
          </p>
          <p>Email: {props.data.email}</p>
        </div>
      )}
    </div>
  );
}
