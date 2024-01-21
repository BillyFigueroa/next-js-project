import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import Navigation from "@/components/Navigation";

describe("Navigation", () => {
  it("should render 'Home' and 'Users' link", () => {
    const { getByRole } = render(<Navigation />);

    const homeNavLink = getByRole("link", { name: "Home" });
    const usersNavLink = getByRole("link", { name: "Users" });

    expect(homeNavLink).toHaveAttribute("href", "/")
    expect(usersNavLink).toHaveAttribute("href", "/users")
  });
});