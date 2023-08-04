import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test Home page", () => {
  test("test hero section", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: "It takes only a few minutes to create a markdown file",
    });

    expect(heading).toBeInTheDocument();
  });
});
