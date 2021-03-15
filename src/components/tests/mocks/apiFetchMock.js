/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';

const saveData = async (name, score) => {
  const gameId = 'ra3fRyGk5YDmKWRuFXwR';
  const request = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

  /* eslint-disable */
    const jsonObj = {
        user: name,
        score: score,
    };
    try {
        const response = await fetch(request, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonObj),
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return 'Everything is working';
        }
        throw new Error('Request Failed');
    } catch (error) {
        return 'Error found';
    }
};

export { saveData };
  /* eslint-enable */