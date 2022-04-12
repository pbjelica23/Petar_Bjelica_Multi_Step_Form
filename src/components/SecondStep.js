import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import img1 from "../assets/images/monkey2.png";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const validationSchema2 = yup.object({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, one Lowercase, one uppercase One Number and one special character"
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
  consent: yup
    .bool()
    .test(
      "consent",
      "You have to agree with our Terms and Conditions!",
      (value) => value === true
    )
    .required("You have to agree with our Terms and Conditions!"),
  phone: yup
    .string()
    .min(8, "Phone must be at least 8 characters long")
    .max(26, "Phone is too long")
    .required("Phone is required"),
});

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
            validationSchema={validationSchema2}
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
                  id="confirmpassword"
                  name="confirmpassword"
                  label={t("confirmPassword")}
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmpassword &&
                    Boolean(formik.errors.confirmpassword)
                  }
                  helperText={
                    formik.touched.confirmpassword &&
                    formik.errors.confirmpassword
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
