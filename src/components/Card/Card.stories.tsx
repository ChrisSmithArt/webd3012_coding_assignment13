import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Card",
  component: Card,
} as Meta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const EnabledCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EnabledCard.args = {
  title: "Enabled",
  disabled: false,
  backgroundColor: "papayawhip",
  content: "Some Content",
};

export const DisabledCard = Template.bind({});
DisabledCard.args = {
  title: "Disabled",
  disabled: true,
  backgroundColor: "grey",
  content: "Content Not Available",
};
