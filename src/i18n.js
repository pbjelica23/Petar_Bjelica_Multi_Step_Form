import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          firstRegister: "Registration: Step One",
          Name: "First Name",
          NameError: "First Name is required",
          NameErrorSecond: "First Name is too short",
          NameErrorThird: "First Name is too long",
          LastName: "Last Name",
          LastNameError: "Last Name is required",
          LastNameErrorSecond: "Last Name is too short",
          LastNameErrorThird: "Last Name is too long",
          Username: "Username",
          UsernameError: "Username is required",
          UsernameErrorSecond: "Username is too short",
          UsernameErrorThird: "Username is too long",
          UsernameErrorFourth: "Can't contain special characters",
          Phone: "Phone",
          PhoneError: "Phone is required",
          PhoneErrorSecond: "Phone is too short",
          PhoneErrorThird: "Phone is too long",
          EmailError: "Email is required",
          EmailErrorSecond: "Email is invalid",
          NextButton: "Next",
          secondRegister: "Registration: Step Two",
          Password: "Password",
          PasswordError: "Please Enter your password",
          PasswordErrorSecond: "Passwords must match",
          PasswordErrorThird: "Password is too weak",
          confirmPassword: "Confirm Password",
          confirmPasswordError: "Password confirm is required",
          termsConditions: "Terms and Conditions",
          termsConditionsError:
            "You have to agree with our Terms and Conditions!",
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
          NameErrorSecond: "Ime je prekratko",
          NameErrorThird: "Ime je predugo",
          LastName: "Prezime",
          LastNameError: "Prezime je obavezno polje",
          LastNameErrorSecond: "Prezime je prekratko",
          LastNameErrorThird: "Prezime je predugo",
          Username: "Korisni??ko ime",
          UsernameError: "Korisni??ko ime je obavezno polje",
          UsernameErrorSecond: "Korisni??ko ime je prekratko",
          UsernameErrorThird: "Korisni??ko ime je predugo",
          UsernameErrorFourth: "Ne smije biti specijalnih karaktera",
          Phone: "Broj telefona",
          PhoneError: "Broj telefona je obavezno polje",
          PhoneErrorSecond: "Broj telefona je prekratak",
          PhoneErrorThird: "Broj telefona je predug",
          EmailError: "Email je obavezno polje",
          EmailErrorSecond: "Email nije validan",
          NextButton: "Slede??e",
          secondRegister: "Registracija: Drugi Korak",
          Password: "Lozinka",
          PasswordError: "Unesite va??u lozinku",
          PasswordErrorSecond: "Lozinke moraju biti iste",
          PasswordErrorThird: "Lozinka je preslaba",
          confirmPassword: "Potvrdi lozinku",
          confirmPasswordError: "Potvrda lozinke je obavezna",
          termsConditions: "Uslovi kori????enja",
          termsConditionsError: "Morate prihvatiti uslove kori????enja!",
          BackButton: "Nazad",
          Info: "Va??i podaci:",
          SubmitButton: "Po??alji",
          Success: "Uspje??no ste se registrovali!",
        },
      },
    },
  });

export default i18n;
