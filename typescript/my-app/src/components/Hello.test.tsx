import * as React from "react";
import { render } from "react-testing-library";

import "jest-dom/extend-expect";

import Hello from "./Hello";

it("renders the correct text when no enthusiasm level is present", () => {
  const { container } = render(<Hello name="world" />);
  expect(container.firstChild!.textContent).toEqual("Hello world!");
});

it("renders the correct text with an explicit enthusiasm level of 5", () => {
  const { container } = render(<Hello name="world" enthusiasmLevel={5} />);
  expect(container.firstChild!.textContent).toEqual("Hello world!!!!!");
});
