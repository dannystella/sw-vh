import { render, screen } from '@testing-library/react';
import fetchPerson from './Util/fetchPerson';

test('star wars api for person returns 200', () => {
  fetchPerson('https://swapi.dev/api/people/?search=r2')
    .then((data) => {
      expect(data && data.status === 200);
    });
});
