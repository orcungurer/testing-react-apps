import { render, screen } from "@testing-library/react"; // 2, 4
import userEvent from "@testing-library/user-event"; // 8
import Greeting from "./Greeting"; // 2

// 6
describe("Greeting Component", () => {
  // 1
  test("renders 'Hello World!' as text", () => {
    // 2, arrange
    render(<Greeting />);

    // 3, act
    // nothing

    // 4, assert
    const helloWorldElement = screen.getByText("Hello World!");

    expect(helloWorldElement).toBeInTheDocument(); // 5
  });

  // 7
  test("renders 'My first component' if the button is NOT clicked", () => {
    render(<Greeting />);

    const paragraphElement = screen.getByText("first component", {
      exact: false,
    });

    expect(paragraphElement).toBeInTheDocument();
  });

  // 8
  test("renders 'Changed!' if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const paragraphElement = screen.getByText("Changed!");
    expect(paragraphElement).toBeInTheDocument();
  });

  // 9
  test("does NOT render 'My first component' if the button is clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const paragraphElement = screen.queryByText("My first component");
    // expect(paragraphElement).not.toBeInTheDocument();
    expect(paragraphElement).toBeNull();
  })
});
