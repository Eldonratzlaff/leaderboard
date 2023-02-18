
// ID: a2Lrrum29HKFEk3Oe7wz
const datab = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a2Lrrum29HKFEk3Oe7wz/scores';

export const getScores = async () => {
  const scorerequest = await fetch(datab);
  const scoreresponse = await scorerequest.json();
  return scoreresponse.result;
};

export const submitScore = async (name, score) => {
  const submitObj = {
    user: name,
    score,
  };
  const scorerequest = await fetch(datab, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submitObj),
  });
  const scoreresponse = await scorerequest.json();
  return scoreresponse.result;
};

