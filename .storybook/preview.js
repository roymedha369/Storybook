
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '@storybook/addon-console';
setCompodocJson(docJson);
import './storybook.css'

// .storybook/preview.js



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" ,handles: ['mouseover img', 'click img']},
 
};






