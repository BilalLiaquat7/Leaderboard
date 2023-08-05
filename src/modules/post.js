import { get } from './get.js';

const btnSubmit = document.getElementById('btnSubmit');
const list = document.getElementById('game_list');
const btnRefresh = document.getElementById('btnRefresh');
const id = localStorage.getItem('game_id');

export const PostGameData = async (id) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  return resp.json;
};

export const displayGameData = async () => {
  list.innerHTML = '';
  const data = await get(`${id}/scores`);
  const gamesData = data.result;

  gamesData.forEach((game) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('listSection');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.innerHTML = game.user;
    p2.innerHTML = game.score;
    div.append(p1);
    div.append(p2);
    li.appendChild(div);
    list.append(li);
  });
};

btnSubmit.addEventListener('click', () => {
  PostGameData(id);
  displayGameData();
});

btnRefresh.addEventListener('click', () => {
  displayGameData();
});
