import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("renders Greeting component", () => {
    render(<Greeting name="World" />);
    const greetingElement = screen.getByText(/Hello, World!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders "Text Not Changed!" by default', () => {
    render(<Greeting name="World" />);
    const textElement = screen.getByText(/Text Not Changed!/i);
    expect(textElement).toBeInTheDocument();
  });

  test('changes text when button is clicked', () => {
    render(<Greeting name="World" />);
    const buttonElement = screen.getByRole('button', { name: /Change Text/i });
    buttonElement.click();
    const changedTextElement = screen.getByText(/Text Changed!/i);
    expect(changedTextElement).toBeInTheDocument();
  });

  

});
