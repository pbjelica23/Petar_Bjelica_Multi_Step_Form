import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";

const validationSchema = yup.object({
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
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
});

export default function SecondStep() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmpassword: "",
        consent: false,
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={validationSchema}
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
            id="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            style={{ marginTop: 30 }}
            fullWidth
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm password"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmpassword &&
              Boolean(formik.errors.confirmpassword)
            }
            helperText={
              formik.touched.confirmpassword && formik.errors.confirmpassword
            }
          />
          <div className="checkbox-field" style={{ marginTop: 30 }}>
            <label htmlFor="consent">
              <input
                name="consent"
                type="checkbox"
                onChange={formik.handleChange}
              />
              <span>Terms and conditions</span>
            </label>
            <p className="MuiFormHelperText-root Mui-error">
              {formik.errors.consent}
            </p>
          </div>

          <Button
            style={{ marginTop: 30 }}
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
