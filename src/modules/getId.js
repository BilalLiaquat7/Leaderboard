const getGameId = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'First Game',
    }),
  });

  const game = await resp.json();
  localStorage.setItem('game_id', game.result.split(' ')[3]);
};

module.exports = getGameId();
