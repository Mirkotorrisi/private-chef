import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import React from "react";

const languageName: Record<string, string> = {
  en: "EN",
  it: "IT",
};

const Language = () => {
  return (
    <IntlContextConsumer>
      {({ languages, language }) =>
        languages.map((lang) => (
          <a
            key={lang}
            onClick={() => changeLocale(lang)}
            className="px-1 hover:cursor-pointer"
          >
            {languageName[lang]}
          </a>
        ))
      }
    </IntlContextConsumer>
  );
};

export default Language;
