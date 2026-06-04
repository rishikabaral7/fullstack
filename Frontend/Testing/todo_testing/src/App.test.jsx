import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
test("Todo list", async () => {
  render(<App/>);

  const input = screen.getByPlaceholderText("add list");

  const button = screen.getByRole("button", {
    name: "Add",
  });

  await userEvent.type(input, "Learn React");
  await userEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
