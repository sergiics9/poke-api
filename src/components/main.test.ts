import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Main } from './main';

describe('Given the component Main', () => {
  document.body.innerHTML = '<div></div>';
  new Main('div');
  const element = screen.getByRole('main');
  describe('When it is instantiate', () => {
    test('It should be in the document', () => {
      expect(element).toBeInTheDocument();
    });
  });
});
