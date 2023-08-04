import Logo from "@/components/ui/Logo";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test Navbar component", () => {
  test("test Logo", () => {
    render(<Logo />);
    const heading = screen.getByRole("heading", {
      name: "dotemd",
    });

    expect(heading).toBeInTheDocument();
  });
});
