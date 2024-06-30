import { StoryFn, Meta } from "@storybook/react";
import Radio from "./Radio";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Radio",
  component: Radio,
} as Meta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />;

export const EnabledRadio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledRadio.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "papayawhip",
  content: "Some Content",
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
  content: "Content Not Available",
};