//%% Imports

//html
// import '../client/views/about.html';
//  Styling Section
import './styles/style.scss';

//  Modules Section
// import { postData } from './js/app.js';
import { handleSubmit } from './js/app.js';
import { daysCalc } from './js/dayCalculator';
import { postData } from './js/postData';
import { updateUI } from './js/updateUI';

// %% Exports

export { handleSubmit, postData, daysCalc, updateUI };
