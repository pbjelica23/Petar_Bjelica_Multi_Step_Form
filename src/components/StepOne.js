import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import img1 from "../assets/images/monkey1.png";
import Loader from "./Loader";
import { useState, useEffect } from "react";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .min(2, "First Name is too short")
    .max(25, "First Name is too long")
    .required("First Name is required"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(2, "Last Name is too short")
    .max(25, "Last Name is too long"),
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters long")
    .max(20, "Username is too long")
    .required("Username is required"),
});

export default function StepOne(props) {
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
    <div className="app">
      {!loaded ? (
        <Loader />
      ) : (
        <div>
          <div className="headerForm">
            <h2>Registration: Step One</h2>
            <img src={img1} alt="Monkey Illustration" />
          </div>
          <Formik
            initialValues={props.data}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
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
                  label="Last Name"
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
                  label="Username"
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
                  Next
                </Button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
