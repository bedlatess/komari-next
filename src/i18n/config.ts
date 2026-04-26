import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import zh_CN from "./locales/zh_CN.json";
import zh_TW from "./locales/zh_TW.json";
import de from "./locales/de.json"; // 1. 引入你刚刚创建的德语 JSON

// not adding the name field will hide the language from the language switcher menu
const resources = {
  en: {
    translation: en,
    name: "English",
  },
  "en-US": {
    translation: en,
  },
  "en-GB": {
    translation: en,
  },
  // --- 2. 在这里添加德语配置 ---
  de: {
    translation: de,
    name: "Deutsch", // 带有 name 字段，菜单里就会出现 "Deutsch (de)"
  },
  "de-DE": {
    translation: de,
  },
  // ---------------------------
  zh: {
    translation: zh_CN,
  },
  zh_CN: {
    translation: zh_CN,
  },
  "zh-CN": {
    translation: zh_CN,
    name: "简体中文",
  },
  "zh-SG": {
    translation: zh_CN,  // Singapore uses Simplified Chinese
  },
  "zh-TW": {
    translation: zh_TW,
    name: "繁體中文",
  },
  zh_TW: {
    translation: zh_TW,
  },
  "zh-HK": {
    translation: zh_TW,  // Hong Kong uses Traditional Chinese
  },
  "zh-MO": {
    translation: zh_TW,  // Macau uses Traditional Chinese
  },
};

const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: Object.keys(resources),
    load: "currentOnly",
    interpolation: {
      escapeValue: false, // React handles XSS
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
export { resources };
