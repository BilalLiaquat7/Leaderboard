export const get = async (endPoint) => {
  const url =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/" +
    endPoint;
  let resp = await fetch(url);
  let data = resp.json();
  return data;
};
