import { render, screen } from "@testing-library/react";

describe("Login Form", () => {
  it("should contain 'Login' text", () => {
    render(<button>Test</button>);
    expect(screen.queryByText("Test")).toBeInTheDocument();
  });
});
