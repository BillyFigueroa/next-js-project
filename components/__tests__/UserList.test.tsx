import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import UserList from "@/components/UserList";
import usersMock from "@/components/__mocks__/users.mock";

describe("UserList", () => {
  const { users } = usersMock;

  it("should render users and verify length", () => {
    const { getByText } = render(
      <UserList
        users={users}
      />
    );

    const userOne = getByText(/Melanie Dean/i);
    const userTwo = getByText(/Marlene Bradley/i);
    const userThree = getByText(/Arianna Kim/i);

    expect(userOne).toBeInTheDocument();
    expect(userTwo).toBeInTheDocument();
    expect(userThree).toBeInTheDocument();
    expect(users.length).toBe(3);
  });
});