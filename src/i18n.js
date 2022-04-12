import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          firstRegister: "Registration: Step One",
          Name: "First Name",
          NameError: "First Name is required",
          LastName: "Last Name",
          LastNameError: "Last Name is required",
          Username: "Username",
          UsernameError: "Username is required",
          Phone: "Phone",
          NextButton: "Next",
          secondRegister: "Registration: Step Two",
          Password: "Password",
          confirmPassword: "Confirm Password",
          termsConditions: "Terms and Conditions",
          BackButton: "Back",
          SubmitButton: "Submit",
          Success: "You have successfully registered!",
          Info: "Your information:",
        },
      },
      me: {
        translation: {
          firstRegister: "Registracija: Prvi Korak",
          Name: "Ime",
          NameError: "Ime je obavezno polje",
          LastName: "Prezime",
          LastNameError: "Prezime je obavezno polje",
          Username: "Korisničko ime",
          UsernameError: "Korisničko ime je obavezno polje",
          Phone: "Broj telefona",
          NextButton: "Sledeće",
          secondRegister: "Registracija: Drugi Korak",
          Password: "Lozinka",
          confirmPassword: "Potvrdi lozinku",
          termsConditions: "Uslovi korišćenja",
          BackButton: "Nazad",
          Info: "Vaši podaci:",
          SubmitButton: "Pošalji",
          Success: "Uspješno ste se registrovali!",
        },
      },
    },
  });

export default i18n;
