import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments counter", async () => {
  render(<Counter />);

  const button = screen.getByRole("button", {
    name: "Count",
  });

  await userEvent.click(button);

  expect(
    screen.getByText("1")
  ).toBeInTheDocument();
});