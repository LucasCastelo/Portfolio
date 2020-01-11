import React, { createContext, useState, useReducer } from 'react';
import { Portuguese, English, German } from './LanguageStore';

export const LanguagesContext = createContext();

export const LanguagesProvider = props => {
  const languageState = { language: 'PT' };
  const [languageContent, setLanguageContent] = useState(Portuguese);

  const setLanguageReducer = (state, action) => {
    // if (action.type === state.language) {
    //   return state;
    // }

    switch (action.type) {
      case 'PT':
        setLanguageContent({ ...Portuguese });
        break;
      case 'GR':
        setLanguageContent({ ...German });
        break;
      case 'EN':
        setLanguageContent({ ...English });
        break;
      default:
        setLanguageContent({ ...Portuguese });
        break;
    }

    return { language: action.type };
  };

  const [state, dispatch] = useReducer(setLanguageReducer, languageState);

  return (
    <LanguagesContext.Provider value={{ languageContent, dispatch, state }}>
      {props.children}
    </LanguagesContext.Provider>
  );
};
