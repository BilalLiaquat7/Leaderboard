const get = async (endPoint) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${endPoint}`;
  const resp = await fetch(url);
  const data = resp.json();
  return data;
};

export default get;