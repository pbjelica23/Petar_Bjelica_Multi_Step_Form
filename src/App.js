import "./App.css";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";

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
  return (
    <div className="container">
      <div className="registration-form">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
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
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
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
                label="Confirm password"
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
      </div>
    </div>
  );
}

export default App;
