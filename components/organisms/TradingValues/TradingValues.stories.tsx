import { IPayload } from "types/story";
import TradingValues from "./TradingValues";

const payload: IPayload = {
  title: "ORGANISMS/TradingValues",
  component: TradingValues,
};
export default payload;

export const Basic = (args: any) => <TradingValues {...args} />;
Basic.args = {};
