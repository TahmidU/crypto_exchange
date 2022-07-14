import { cleanup, render, screen } from "utils/test-config";

import GJNumberLabel from "./GJNumberLabel";

afterEach(cleanup);

describe("GJNumberLabel", () => {
  test("show amount and desc", () => {
    // Given
    const expectedAmount = 5;
    const expectedDesc = "Hello World";

    // When
    render(<GJNumberLabel amount={expectedAmount} desc={expectedDesc} />);

    // Then
    expect(screen.getByText(expectedAmount)).toBeVisible();
    expect(screen.getByText(expectedDesc)).toBeVisible();
  });
});
