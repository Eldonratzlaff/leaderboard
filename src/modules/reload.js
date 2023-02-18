import display from './display.js';
import { getScores } from './lapi.js';

export const refresh = async () => {
  const toli = document.getElementsByTagName('ul')[0];
  toli.innerHtml = '';
  const games = await getScores();
  games.array.forEach((game) => {
    display(game);
  });
};

export const refreshEvent = (e) => {
  e.preventDefault();
  refresh();
};
