import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it("should render basic text", () => {
    const welcomeText = screen.getByText(/Welcome to the/);
    const challengeText = screen.getByText(/Coding Challenge/);

    expect(welcomeText).toBeInTheDocument();
    expect(challengeText).toBeInTheDocument();
  });

  it("should render a link to view users", () => {
    const viewUsersLink = screen.getByRole("link", { name: "View User List" });

    expect(viewUsersLink).toHaveAttribute("href", "/users")
  });
});