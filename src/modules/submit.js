import { submitScore } from './lapi.js';
import { refresh } from './reload.js';

const submitEven = async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');
  const name = form.elements.name.value;
  const score = form.elements.score.value;
  await submitScore(name, score);
  refresh();
  form.reset();
};

export default submitEven;
