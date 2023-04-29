import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Navigation menu', () => {
  renderApp();
  expect(screen.getByText("HOME")).toBeInTheDocument();
  expect(screen.getByText("ABOUT")).toBeInTheDocument();
  expect(screen.getByText("MENU")).toBeInTheDocument();
  expect(screen.getByText("RESERVATION")).toBeInTheDocument();
  expect(screen.getByText("ORDER ONLINE")).toBeInTheDocument();
  expect(screen.getByText("LOGIN")).toBeInTheDocument();
});

test('Testimonials', async () => {
  renderApp();

  expect(screen.getByText("Testimonials")).toBeInTheDocument();
  await waitFor(
    () => {
      expect(screen.getByAltText(/user1/)).toBeInTheDocument();
    },
    { timeout: 3000 }
  );
  expect(screen.getByAltText(/user2/)).toBeInTheDocument();
  expect(screen.getByAltText(/user3/)).toBeInTheDocument();
  expect(screen.getByAltText(/user4/)).toBeInTheDocument();
  expect(screen.getByAltText(/user5/)).toBeInTheDocument();
  expect(screen.getByAltText(/user6/)).toBeInTheDocument();
});

test('Reserve a table button', () => {
  renderApp();
  const reserveTableButton = screen.getByText("Reserve a table")
  expect(reserveTableButton).toBeInTheDocument();
  fireEvent.click(reserveTableButton)
  expect(screen.getByText(/Step 1\/3/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date and Time/)).toBeInTheDocument();
  let plusButton = screen.getByDisplayValue(/\+/);
  let minusButton = screen.getByDisplayValue("-");
  expect(plusButton).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
  fireEvent.click(plusButton);
  expect(screen.getByText("2")).toBeInTheDocument();
  let resetButton = screen.getByDisplayValue(/reset/)
  expect(resetButton).toBeInTheDocument();
  fireEvent.click(resetButton);
  expect(screen.getByText("1")).toBeInTheDocument();
  fireEvent.click(minusButton);
  expect(screen.getByText("0")).toBeInTheDocument();

  let nextButton = screen.getByText("Next")
  fireEvent.click(nextButton);
  expect(screen.getByText(/Step 2\/3/)).toBeInTheDocument();

  let reserveButton = screen.getByText("Reserve")
  fireEvent.click(reserveButton);
  expect(screen.getByText(/Step 3\/3/)).toBeInTheDocument();
});

function renderApp() {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
}
