import "./App.css";
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/SecondStep";
import SuccessMessage from "./components/SuccessMessage";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";

const lngs = {
  en: { nativeName: "English" },
  me: { nativeName: "Montenegrin" },
};

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    gender: "",
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
    <SuccessMessage data={data} />,
  ];

  const { i18n } = useTranslation();

  return (
    <div className="container">
      <div className="languageSwitcher">
        {Object.keys(lngs).map((lng) => (
          <Button
            key={lng}
            variant={i18n.resolvedLanguage === lng ? "contained" : "outlined"}
            color="primary"
            type="submit"
            style={{ marginRight: 20, marginTop: 20 }}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </div>
      {steps[currentStep]}
    </div>
  );
}

export default App;
