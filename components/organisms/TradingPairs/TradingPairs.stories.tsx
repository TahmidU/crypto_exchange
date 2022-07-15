import { IPayload } from "types/story";
import TradingPairs from "./TradingPairs";
import { TradingPairsFakeData } from "resources/FakeData/TradingPairs";

const payload: IPayload = {
  title: "ORGANISMS/TradingPairs",
  component: TradingPairs,
};
export default payload;

export const Basic = (args: any) => <TradingPairs {...args} />;
Basic.args = {
  tradingPairs: TradingPairsFakeData,
};
