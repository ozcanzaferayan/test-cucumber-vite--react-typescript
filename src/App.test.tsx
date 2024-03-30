import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    const hello = screen.getByText("Vite + React");
    expect(hello).toBeInTheDocument();

    // check if App components renders headline
  });
});
