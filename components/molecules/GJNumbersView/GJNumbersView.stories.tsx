import GJNumbersView from "./GJNumbersView";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "MOLECULES/GJNumbersView",
  component: GJNumbersView,
};
export default payload;

export const Basic = (args: any) => <GJNumbersView {...args} />;
Basic.args = {};
