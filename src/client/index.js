//%% Imports

//  Styling Section
import './styles/style.scss';

//  Modules Section
import { handleSubmit } from './js/app.js';
import { daysCalc } from './js/dayCalculator';
import { postData } from './js/postData';
import { updateUI } from './js/updateUI';

document.addEventListener('DOMContentLoaded', () => {
   document
      .getElementById('btn')
      .addEventListener('click', () => Client.handleSubmit(event));
});

// %% Exports

export { handleSubmit, postData, daysCalc, updateUI };
