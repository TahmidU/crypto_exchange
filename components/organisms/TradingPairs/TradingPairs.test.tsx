import { cleanup, fireEvent, render, screen } from "utils/test-config";

import TradingPairs from "./TradingPairs";
import { TradingPairsFakeData } from "resources/FakeData/TradingPairs";

afterEach(cleanup);

describe("TradingPairs", () => {
  test("All pairs should be on DOM", () => {
    // Given
    const fakeData = TradingPairsFakeData;
    const buttonTestId = "Button";

    // When
    render(<TradingPairs tradingPairs={fakeData} />);

    // Then
    expect(screen.getAllByTestId(buttonTestId).length).toBe(fakeData.length);
  });

  test("onClick calls back once and returns correct pair", () => {
    // Given
    const fakeData = TradingPairsFakeData;
    const fakeOnClick = jest.fn();

    // When
    render(<TradingPairs tradingPairs={fakeData} onClick={fakeOnClick} />);

    // Then
    fireEvent.click(screen.getByText(fakeData[0].name));
    expect(fakeOnClick).toHaveBeenCalledWith(fakeData[0].name);
  });
});
