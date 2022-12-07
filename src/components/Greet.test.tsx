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
/**
 * Naming convention
 * .test.js, .test.tsx, .spec.js, .spec.tsx
 * .js or .tsx within __tests__ folders
 */
//test <=>it, test.only <=> ffit, test.skip<=>xit
import { render, screen } from "@testing-library/react";
import Greet from "./greet/Greet";
describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
  // describe("Nested", () => {
  //   test("Renders with a name", () => {
  //     render(<Greet name={"Vishnu"} />);
  //     const textElement = screen.getByText("Hello Vishnu");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});
//test.only => jest only pickups this test to run
//test.skip => just skips this test while running

//describe method
//able to use 'only' ans 'skip'
//can nest describe blocks

//Code coverage: A metric that can help you understand how much of your software code is tested.
//a. statement coverage
//b. branches coverage
//c. function coverage
//d. line coverage
