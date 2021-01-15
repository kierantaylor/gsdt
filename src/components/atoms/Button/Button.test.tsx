import { render } from "@testing-library/react";
import Button from ".";

describe("Button tests", () => {
  test("Button renders the correct text", async () => {
    const component = render(<Button>Woop, this button looks good!</Button>);

    const buttonText = "Woop, this button looks good!";
    expect(await component.findByText(buttonText)).toBeInTheDocument();
  });
});
