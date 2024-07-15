import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Label",
  component: Label,
} as Meta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const EnabledLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledLabel.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "white",
};

export const DisabledLabel = Template.bind({});
DisabledLabel.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
};
