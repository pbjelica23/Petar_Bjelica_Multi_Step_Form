import "./App.css";
import { Formik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

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
    .min(4, "Username must be at lest 4 characters long")
    .max(20, "Username is too long")
    .required("Username is required"),
});

const validationSchema2 = yup.object({
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

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    consent: false,
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log(formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  // console.log(data);

  return (
    <div className="container">
      <div className="registration-form">{steps[currentStep]}</div>
    </div>
  );
}

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
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
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            style={{ marginTop: 30 }}
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
            error={formik.touched.username && Boolean(formik.errors.username)}
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
  );
};

const StepTwo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
    alert(JSON.stringify(values, null, 2));
  };
  return (
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
            type="button"
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => props.prev(formik.values)}
          >
            Back
          </Button>
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
};

export default App;
