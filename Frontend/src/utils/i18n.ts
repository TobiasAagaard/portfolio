import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources: Resource = {
  dk: {
    translation: {
        welcomeMessage: "Hej, mit Navn er Tobias 👋",
        introText: "Jeg er en",
        typewriter: {
        "first": "Frontend Udvikler",
        "second": "Backend Udvikler",
        "third": "Software udvikler"
    }
    }
  },
  en: {
    translation: {
        welcomeMessage: "Hey, I'm Tobias 👋",
        introText: "I am a",
        typewriter: {
          "first": "Frontend Developer",
          "second": "Backend Developer",
          "third": "Software Developer"
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    fallbackLng: 'dk',
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;