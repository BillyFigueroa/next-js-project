import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

import UserCard from "@/components/UserCard";
import userMock from "@/components/__mocks__/User.mock";

describe("UserCard", () => {
  const { user } = userMock;

  it("should render name, city and age", () => {
    const { getByText } = render(
      <UserCard
        user={user}
        displayBorder={false}
      />
    );

    const name = getByText(/Melanie Dean/i);
    const city = getByText(/Fort Wayne/i);
    const age = getByText(/36/i);

    expect(name).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(age).toBeInTheDocument();
  });

  it("should render top border", () => {
    const { getByTestId } = render(
      <UserCard
        user={user}
        displayBorder={true}
      />
    );

    const userCard = getByTestId("UserCard--border");

    expect(userCard).toHaveClass("border-t");
  });
});