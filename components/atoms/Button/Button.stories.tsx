import Button from "./Button";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Button",
  component: Button,
};
export default payload;

export const Basic = (args: any) => (
  <div style={{ width: "100%", height: "100vh" }}>
    <Button {...args} />
  </div>
);
Basic.args = {
  title: "Button Title",
};
