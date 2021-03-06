const api = {
  key: 'ra3fRyGk5YDmKWRuFXwR',
  baseUrl: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  async saveScore(data = {}) {
    const response = await fetch(`${this.baseUrl}games/${this.key}/scores/`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async fectchScores() {
    const response = await fetch(`${this.baseUrl}games/${this.key}/scores/`, { mode: 'cors' });
    return response.json();
  },
};

export default api;
