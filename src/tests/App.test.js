import { render, screen } from "@testing-library/react";
import App from "../app/App";

test("Renders welcome", () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
