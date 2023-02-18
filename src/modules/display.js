const display = (game) => {
  const toli = document.getElementsByTagName('ul')[0];
  const gameElement = document.createElement('li');
  gameElement.innerHTML = `<li>${game.user}: ${game.score}</li>`;
  toli.appendChild(gameElement);
};

export default display;
