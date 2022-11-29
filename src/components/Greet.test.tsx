/**
 * Greet should render the text hello and if a name is passed into the component,
 * it should render hello, followed by the name
 */
/**
 * TDD(Test Driven Development) approach
 * 1. write the test with the requirements
 * 2. write code
 * 3. Refactoring
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet/Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});
test("Greet renders with a name", () => {
  render(<Greet name={"Vishnu"} />);
  const textElement = screen.getByText("Hello Vishnu");
  expect(textElement).toBeInTheDocument();
});
