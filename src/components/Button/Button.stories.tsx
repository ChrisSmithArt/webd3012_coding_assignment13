import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const EnabledButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledButton.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "white",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
};