import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import img1 from "../assets/images/monkey2.png";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function StepTwo(props) {
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
        <div>
          <div className="headerForm">
            <h2>{t("secondRegister")}</h2>
            <img src={img1} alt="Monkey Illustration" />
          </div>
          <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={yup.object({
              email: yup
                .string()
                .email(t("EmailErrorSecond"))
                .required(t("EmailError")),
              password: yup
                .string()
                .required(t("PasswordError"))
                .matches(
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                  t("PasswordErrorThird")
                ),
              confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"), null], t("PasswordErrorSecond"))
                .required(t("confirmPasswordError")),
              consent: yup
                .bool()
                .test(
                  "consent",
                  t("termsConditionsError"),
                  (value) => value === true
                )
                .required(t("termsConditionsError")),
              phone: yup
                .string()
                .min(8, t("PhoneErrorSecond"))
                .max(26, t("PhoneErrorThird"))
                .required(t("PhoneError")),
            })}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="phone"
                  name="phone"
                  label={t("Phone")}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="password"
                  name="password"
                  label={t("Password")}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <TextField
                  style={{ marginTop: 30 }}
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label={t("confirmPassword")}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
                <div className="checkbox-field" style={{ marginTop: 30 }}>
                  <label htmlFor="consent">
                    <input
                      name="consent"
                      type="checkbox"
                      id="consent"
                      onChange={formik.handleChange}
                    />
                    <span> {t("termsConditions")}</span>
                  </label>
                  <p className="MuiFormHelperText-root Mui-error">
                    {formik.errors.consent}
                  </p>
                </div>
                <Button
                  style={{ marginTop: 30 }}
                  type="button"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={() => props.prev(formik.values)}
                >
                  {t("BackButton")}
                </Button>
                <Button
                  style={{ marginTop: 30 }}
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  {t("SubmitButton")}
                </Button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
