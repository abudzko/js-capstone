import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
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

test('Reserve a table button', async () => {
  renderApp();
  const reserveTableButton = screen.getByText("Reserve a table")
  expect(reserveTableButton).toBeInTheDocument();
  fireEvent.click(reserveTableButton)
  expect(screen.getByText(/Step 1\/3/)).toBeInTheDocument();
  expect(screen.getByText(/Date and Time/)).toBeInTheDocument();
  expect(screen.getByText(/Guest Number/)).toBeInTheDocument();

  let counter = document.querySelector(".counter");
  let plusButton = within(counter).getByDisplayValue(/\+/);
  let minusButton = within(counter).getByDisplayValue("-");
  expect(plusButton).toBeInTheDocument();
  expect(within(counter).getByText("1")).toBeInTheDocument();
  fireEvent.click(plusButton);
  expect(within(counter).getByText("2")).toBeInTheDocument();
  let counterReset = document.querySelector(".counterReset");
  let resetButton = within(counterReset).getByText(/reset/)
  expect(resetButton).toBeInTheDocument();
  fireEvent.click(resetButton);
  expect(within(counter).getByText("1")).toBeInTheDocument();
  fireEvent.click(minusButton);
  expect(within(counter).getByText("1")).toBeInTheDocument();
  expect(screen.getByText("Atleast one guest should be selected")).toBeInTheDocument();

  let nextButton = screen.getByText("Next")
  fireEvent.click(nextButton);
  expect(screen.getByText(/Step 2\/3/)).toBeInTheDocument();
  fireEvent.change(screen.getByPlaceholderText("Your First Name"), { target: { value: 'Tom' } })
  fireEvent.change(screen.getByPlaceholderText("Your Last Name"), { target: { value: 'Tom' } })
  fireEvent.change(screen.getByPlaceholderText("+12345678912"), { target: { value: '+12345678912' } })
  fireEvent.change(screen.getByPlaceholderText("You email"), { target: { value: 'email@email.com' } })

  let reserveButton = screen.getByText("Reserve")
  fireEvent.click(reserveButton);
  await waitFor(
    () => {
      expect(screen.getByText(/Step 3\/3/)).toBeInTheDocument();
    },
    { timeout: 1000 }
  );
});

function renderApp() {
  render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ));
}
