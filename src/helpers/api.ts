/* eslint-disable no-console */
import { Cat } from '../types/Cat';

export function getCats(): Promise<Cat[]> {
  return fetch('https://anastasia4sik.github.io/Cats/api/cats.json')
    .then(response => response.json())
    .catch(error => {
      console.error(error);

      return [];
    });
}
