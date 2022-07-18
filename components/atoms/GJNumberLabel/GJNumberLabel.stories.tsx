import GJNumberLabel from "./GJNumberLabel";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/GJNumberLabel",
  component: GJNumberLabel,
};
export default payload;

export const Basic = (args: any) => <GJNumberLabel {...args} />;
Basic.args = {
  amount: 1,
  desc: "This is a description",
};
