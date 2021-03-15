/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { saveData } from './mocks/apiFetchMock';
import request from './mocks/apiRequestMock';
import 'regenerator-runtime/runtime';

test('Test if name and score input works', () => {
  const score = saveData('brenda', 450);
  score.then(result => {
    expect(result).toBe('Everything is working');
  }).catch(() => 'Error found');
});

test('Test if data is being received from API', () => {
  const api = request.checkData();
  api.then(result => {
    expect(result[0].user).toBe('brenda');
  });
});