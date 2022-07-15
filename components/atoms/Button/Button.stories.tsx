import Button from "./Button";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Button",
  component: Button,
};
export default payload;

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {
  title: "Button Title",
};
