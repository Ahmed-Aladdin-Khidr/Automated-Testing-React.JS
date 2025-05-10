import {render, screen, waitFor} from '@testing-library/react';
import Async from './Async'; // Adjust the import path as necessary

describe('Async Component', () => {
  test('renders posts after fetching', async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0); // Initially, no posts should be rendered
  });
});