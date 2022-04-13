import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import img1 from "../assets/images/monkey1.png";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function StepOne(props) {
  const { t } = useTranslation();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <div className="registration-form">
      {!loaded ? (
        <Loader />
      ) : (
        <div className="form-container">
          <div className="headerForm">
            <h2>{t("firstRegister")}</h2>
            <img src={img1} alt="Monkey Illustration" />
          </div>
          <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={yup.object({
              firstName: yup
                .string()
                .min(2, t("NameErrorSecond"))
                .max(25, t("NameErrorThird"))
                .required(t("NameError")),
              lastName: yup
                .string()
                .required(t("LastNameError"))
                .min(2, t("LastNameErrorSecond"))
                .max(25, t("LastNameErrorThird")),
              username: yup
                .string()
                .min(4, t("UsernameErrorSecond"))
                .max(20, t("UsernameErrorThird"))
                .matches(/^[a-z0-9\\-\\_]+$/, t("UsernameErrorFourth"))
                .required(t("UsernameError")),
            })}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label={t("Name")}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label={t("LastName")}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="username"
                  name="username"
                  label={t("Username")}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />

                <Button
                  style={{ marginTop: 30 }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  {t("NextButton")}
                </Button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
