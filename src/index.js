
import './style.css';
import submitEven from './modules/submit.js';
import { refresh, refreshEvent } from './modules/reload.js';

const refreshbtn = document.getElementById('refresh-btn');
refreshbtn.addEventListener('click', refreshEvent);

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitEven);

window.onload = () => {
  refresh();
};

