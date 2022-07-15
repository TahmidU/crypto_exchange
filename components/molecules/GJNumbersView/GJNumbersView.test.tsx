import { cleanup, render, screen } from "utils/test-config";

import GJNumbersView from "./GJNumbersView";

afterEach(cleanup);

describe("GJNumbersView", () => {
  test("Show correct GJNumberLabels", () => {
    // Given
    const expectedTitle = "Test Title";
    const counts: [number, string][] = [
      [10, "Unique Users"],
      [23, "Devices"],
    ];
    const expectedNumOfLabels = counts.length;
    const gJNumberLabelTestId = "GJNumberLabel";

    // When
    render(<GJNumbersView title={expectedTitle} counts={counts} />);

    // Then
    expect(screen.getByText(expectedTitle)).toBeVisible();
    expect(screen.getAllByTestId(gJNumberLabelTestId).length).toBe(
      expectedNumOfLabels
    );
  });
});
