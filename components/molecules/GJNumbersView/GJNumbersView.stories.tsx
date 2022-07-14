import GJNumbersView from "./GJNumbersView";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/GJNumbersView",
  component: GJNumbersView,
};
export default payload;

export const Basic = (args: any) => <GJNumbersView {...args} />;
Basic.args = {
  title: "Test title",
  counts: [
    [10, "Unique Users"],
    [23, "Devices"],
  ],
};
