// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../locales/en/translation.json";
import translationAZ from "../locales/az/translation.json";
import translationTR from "../locales/tr/translation.json";

export const resources = {
  en: {
    translation: translationEN,
  },
  az: {
    translation: translationAZ,
  },
  tr: {
    translation: translationTR,
  },
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  // lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
 
});

export default i18n;
