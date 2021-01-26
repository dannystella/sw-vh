import { render, screen } from '@testing-library/react';
import fetchFilms from './Util/fetchFilms'
test('star wars api returns 200', () => {
  fetchFilms()
    .then((data) => {
      expect(data && data.status === 200);
    });
});
