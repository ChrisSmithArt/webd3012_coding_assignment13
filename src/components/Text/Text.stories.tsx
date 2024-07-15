import { StoryFn, Meta } from "@storybook/react";
import Text from "./Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Text",
  component: Text,
} as Meta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const EnabledText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledText.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "white",
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
};
