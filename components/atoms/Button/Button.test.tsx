import { cleanup, fireEvent, render, screen } from "utils/test-config";

import Button from "./Button";

afterEach(cleanup);

describe("Button", () => {
  test("Show button title", () => {
    // Given
    const expectedTitle = "title";

    // When
    render(<Button title={expectedTitle} />);

    // Then
    expect(screen.getByText(expectedTitle)).toBeVisible();
  });

  test("onClick callback once", () => {
    // Given
    const fakeOnClick = jest.fn();
    const title = "title";

    // When
    render(<Button title={title} onClick={fakeOnClick} />);

    // Then
    fireEvent.click(screen.getByText(title));
    expect(fakeOnClick).toBeCalledTimes(1);
  });
});
