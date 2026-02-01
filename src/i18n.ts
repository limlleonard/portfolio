import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n.use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: "de",
        fallbackLng: "en",
        ns: ["portfolio", "cv"], // namespace
        defaultNS: "portfolio",
        backend: {
            loadPath: "./translations/{{lng}}/{{ns}}.json",
        },
        // interpolation: { escapeValue: false },
    });

export default i18n;

// resources: {
//     en: {
//         translation: {
//             welcome: "Welcome",
//             projects: "Projects",
//             contact: "Contact",
//             hello: "Hello, I am Menglin Li",
//             developer: "A Full-Stack Developer",
//             h2Project: "Here are my projects",
//             together: "Let us work together",
//             call: "Call me",
//             cc: "Chinese checker",
//             rag: "RAG",
//             imageTile: "Image Tile",
//             blog: "Blog",
//             kegel: "Conic section construction instruction",
//             fourIn1Row: "Four in a row",
//             spiral: "Spiral painting game",
//             fiveIn1Row: "Five in a row (Minimax algorithm)",
//             regression: "Regression analysis",
//         },
//     },
//     de: {
//         translation: {
//             welcome: "Willkommen",
//             projects: "Projekte",
//             contact: "Kontakt",
//             hello: "Hallo, Ich bin Menglin Li",
//             developer: "Ein Full-Stack Entwickler",
//             h2Project: "Das sind meine Projekte",
//             together: "Lass uns zusammenarbeiten",
//             call: "Ruf mich an",
//             cc: "Sternhalma",
//             rag: "RAG",
//             imageTile: "Bild Kachel",
//             blog: "Blog",
//             kegel: "Kegelschnitt Konstruktion Anweisung",
//             fourIn1Row: "Four in a row",
//             spiral: "Spiral malen Spiel",
//             fiveIn1Row: "Five in a row (Minimax Algorithmus)",
//             regression: "Regressionsanalyse",
//         },
//     },
// },
