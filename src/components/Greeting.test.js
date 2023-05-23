import { render, screen } from "@testing-library/react"; // 2, 4
import Greeting from "./Greeting"; // 2

// 6
describe("Greeting Component", () => {
  // 1
  test("renders Hello World! as text", () => {
    // 2, arrange
    render(<Greeting />);

    // 3, act
    // nothing

    // 4, assert
    const helloWorldElement = screen.getByText("Hello World!");

    expect(helloWorldElement).toBeInTheDocument(); // 5
  });
});
