import "./App.css";
import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/SecondStep";
import SuccessMessage from "./components/SuccessMessage";
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
    <SuccessMessage data={data} />,
  ];

  return (
    <div className="container">
      <div className="registration-form">{steps[currentStep]}</div>
    </div>
  );
}

export default App;
